import React from "react";

const Login = () => {
  const logo = process.env.PUBLIC_URL + "/logo.png";
  return (
    <main className="w-full h-screen flex flex-col items-center justify-center px-4">
      <div className="max-w-sm w-full text-gray-600">
        <div className="text-center">
          <a href="/">
          <img src={logo} width={150} className="mx-auto" alt="logo"/>
          </a>
          <div className="mt-5 space-y-2">
            <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
              Connectez-vous à votre compte
            </h3>
            <p className="">
              Vous n'avez pas encore de compte ?
              <a
                href="/signin"
                className="font-medium text-cyan-950 hover:text-cyan-800 pl-1"
              >
                Inscrivez-vous
              </a>
            </p>
          </div>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="shadow mt-8 space-y-5">
          <div>
            <label className="font-medium">Email</label>
            <input
              type="email"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:text-cyan-950 shadow-sm rounded-lg"
              autoComplete="email" // Ajout de l'attribut autocomplete pour l'email
            />
          </div>
          <div>
            <label className="font-medium">Mot de passe</label>
            <input
              type="password"
              required
              className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:text-cyan-950 shadow-sm rounded-lg"
              autoComplete="current-password" // Ajout de l'attribut autocomplete pour le mot de passe
            />
          </div>
          <button className="w-full px-4 py-2 text-white font-medium bg-cyan-950 hover:bg-cyan-800 active:text-cyan-950 rounded-lg duration-150">
            Connexion
          </button>
        </form>
      </div>
    </main>
  );
};

export default Login;