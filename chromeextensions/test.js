fetch('https://www.instagram.com/p/C-slr61vygJ/', {size: 200})
    .then(res => {
        if (res.ok){
            console.log(res)
        } else {
            console.log("not success")
        }
        const data = res.text()
        console.log(data)
    })
