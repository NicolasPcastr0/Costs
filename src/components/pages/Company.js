import "./AboutUs.css";
function Company() {
    return (
    <div className="about-page">
      <section className="about-container">
        <h1 className="about-title">Sobre a Empresa</h1>
        <div className="divider"></div>
        <p className="about-text">
          Somos uma startup jovem e apaixonada por tecnologia, inovação e desenvolvimento pessoal.
          Nosso propósito é criar soluções inteligentes para ajudar pessoas a organizarem suas finanças
          e planejarem seus projetos futuros com mais clareza, autonomia e confiança.
        </p>
        <p className="about-text">
          Fundada por Nicolas Pereira de Castro, estudante de Ciência da Computação na Unijuí, a empresa
          nasceu da vontade de tornar o controle financeiro acessível e prático para todos — especialmente
          para quem está começando a construir seus sonhos.
        </p>
        <p className="about-text">
          Utilizamos tecnologias modernas como React e JavaScript para desenvolver uma experiência
          intuitiva, segura e eficiente. Nosso aplicativo é mais do que uma ferramenta: é um parceiro
          no caminho da organização financeira e realização de metas.
        </p>
        <p className="about-text">
          Acreditamos que, com o apoio certo, qualquer pessoa pode conquistar estabilidade e alcançar seus objetivos.
        </p>
      </section>
    </div>
  );
}

export default Company