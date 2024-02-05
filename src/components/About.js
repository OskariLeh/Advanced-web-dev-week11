import React, { useEffect, useState } from 'react'

function About() {
    let [aboutData, setAboutData] = useState([])

    useEffect(() => {
        let mounted = true
        async function getData() {
            let result = []
            await fetch("https://jsonplaceholder.typicode.com/posts")
            .then(response => response.json())
            .then(data => 
                data.forEach(element => {
                let newData = {
                    id: element.id,
                    title: element.title
                }
                result.push(newData)
            }))
            


            if (mounted) {
                setAboutData(result)
            }
        }
        getData()
        
        return () => {
            mounted = false
        }
    }, [])
    console.log(aboutData)
    const listItems = aboutData.map((item) => {
        return <li key={item.id} >{item.title}</li>
    })
  return (
    <div>
        <ul>{listItems}</ul>
    </div>
  )
}

export default About