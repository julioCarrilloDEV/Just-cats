const BASE_URL = 'https://api.thecatapi.com/v1/images/search';
const catBtn = document.getElementById('change-cat');


const getCats = async () => {
    try{
        const data = await fetch(BASE_URL); // retorna uma promise
        const json = await data.json(); // json é um formato de troca de informações muito utilizado em omunicação de front-ends com APIs

        return json[0].url;
    } catch (e){
        console.log(e.message);
    }
};


const loadImg = async() => {
    const catImg = document.getElementById('cat');
    catImg.src = await getCats(); // await é um operador específico para lidar com Promises
}

catBtn.addEventListener('click', loadImg);

loadImg(); // Já deixa uma imagem carregada ao iniciar a página