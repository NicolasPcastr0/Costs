import { parse, v4 as uuidv4 } from 'uuid'

import styles from './Proje.module.css'

import { useParams } from 'react-router-dom'
import {useState, useEffect} from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../service/ServiceForm'

function Proje() {

    const { id } = useParams()
    
    const [project, setProject] = useState([])

    const [showProjectForm, setShowProjectForm] = useState(false)

    const [showServiceForm, setShowServiceForm] = useState(false)

    const [message, setMessage] = useState()
    const [type, setType] = useState()

    useEffect(() => {
       setTimeout(() => {
        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
        })
        .catch((err) => console.log(err))
       }, 300)
    }, [id])

    function editPost(project) {
        setMessage('')

        if (project.budget < project.cost) {
            setMessage('O orcamento nao pode ser menor que o custo do projeto!')
            setType('error')
            return false
        }
        
        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            setProject(data)
            setShowProjectForm(false)
            setMessage('Projeto atualizado com sucesso!')
            setType('success')
        })
        .catch((err) => console.log(err))
    }

    function createService(project) {

        const lastService = project.service[project.service.length - 1]

        lastService.id = uuidv4()

        const lastServiceCost = lastService.cost

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        if (newCost > parseFloat(project.budget)) {
            setMessage('Orçamento ultrapassado, verifique o valor do serviço ou o orcamento do projeto!')
            setType('error')
            project.service.pop()
            return false
        }

    }

    function toggleProjectForm() {
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm() {
        setShowServiceForm(!showServiceForm)
    }

    return (<>
        {project.name ? (
            <div className={styles.project_details}>
                <Container customClass="column">
                    {message && <Message type={type} msg={message}/>}
                    <div className={styles.details_container}>
                        <h1>Projeto: {project.name}</h1>
                        <button className={styles.btn} onClick={toggleProjectForm}>
                            {!showProjectForm ? 'Editar projeto' : 'fechar'}
                        </button>
                        {!showProjectForm ? (
                            <div className={styles.project_info}>
                                <p>
                                    <span>Categoria:</span> {project.category.name}
                                </p>
                                <p>
                                    <span>Orcamento:</span> R${project.budget}
                                </p>
                                <p>
                                    <span>Total Utilizado:</span> R${project.cost}
                                </p>
                            </div>
                        ) : (
                            <div className={styles.project_info}>
                                <ProjectForm 
                                handleSubmit={editPost} 
                                btnText="Concluir edição" 
                                projectData={project} />
                            </div>
                        )}
                    </div>
                    <div className={styles.service_form_container}>
                        <h2>Adicione um serviço:</h2>
                        <button className={styles.btn} onClick={toggleServiceForm}>
                            {!showServiceForm ? 'Adicionar serviço' : 'fechar'}
                        </button>
                        <div className={styles.project_info}>
                            {showServiceForm && <ServiceForm
                                    handleSubmit={createService}
                                    btnText="Adicionar serviço"
                                    projectData={project}
                                />}
                        </div>
                    </div>
                    <h2>Serviços</h2>
                    <Container customClass="start">
                        <p>Itens de serviço</p>
                    </Container>
                </Container>
            </div>
        ) : (
            <Loading />
        )}
    </>)
}

export default Proje