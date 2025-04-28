function callapi(url: string): Promise<Response>
{
    return fetch(url).then(res=>res.json());
}

callapi("https://cataas.com/cat?width=200;height=200;json=true").then(res=>console.log(res));
