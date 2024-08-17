function getOpenGraph(link){
    async function getData() {
        try {
          const response = await fetch(link);
          if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
          }
          const text = await response.text();
          console.log(text);
        } catch (error) {
          console.error(error.message);
        }
      }
}

getOpenGraph('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')