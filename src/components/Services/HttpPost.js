const HttpPost = async (data) => {
    await fetch("http://localhost:5276/auth/signup", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
         'Content-Type': 'application/json'
        },
    });
}

export default HttpPost;