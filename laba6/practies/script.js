export function getId() {
    const dataId = document.getElementsByName("root")
    const id = Array()
        
    for (let i = 0; i < data.length; i++) { id.push(dataId[i].id) }
    
    return id
}
