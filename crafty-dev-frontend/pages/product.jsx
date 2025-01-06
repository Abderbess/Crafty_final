// Page: product.jsx with embedded CSS

export default function Product() {
  return (
    <div>
      <Header />
      <style jsx>{`
        .container {
          max-width: 800px;
          margin: 40px auto;
          padding: 20px;
          background-color: #fffef6;
          border: 1px solid #d5c4a1;
          border-radius: 5px;
        }

        h1 {
          text-align: center;
          color: #2e4226;
          margin-bottom: 30px;
        }

        h2 {
          color: #d5c4a1;
          margin-top: 20px;
        }

        p {
          line-height: 1.6;
          color: #555;
          margin-bottom: 20px;
        }
      `}</style>
      <div className="container">
        <h1>Conditions générales</h1>

        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra velit ac dui ullamcorper malesuada. Mauris interdum urna nec pharetra hendrerit. Nulla facilisi. Nunc non arcu ornare, imperdiet velit sit amet, dictum massa. Etiam malesuada fringilla est, et amet finibus ipsum porta eget.</p>

        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra velit ac dui ullamcorper malesuada. Mauris interdum urna nec pharetra hendrerit. Nulla facilisi. Nunc non arcu ornare, imperdiet velit sit amet, dictum massa. Etiam malesuada fringilla est, et amet finibus ipsum porta eget.</p>

        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra velit ac dui ullamcorper malesuada. Mauris interdum urna nec pharetra hendrerit. Nulla facilisi. Nunc non arcu ornare, imperdiet velit sit amet, dictum massa. Etiam malesuada fringilla est, et amet finibus ipsum porta eget.</p>

        <h2>Lorem ipsum</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus viverra velit ac dui ullamcorper malesuada. Mauris interdum urna nec pharetra hendrerit. Nulla facilisi. Nunc non arcu ornare, imperdiet velit sit amet, dictum massa. Etiam malesuada fringilla est, et amet finibus ipsum porta eget.</p>
      </div>
      <Footer />
    </div>
  );
}
