const generateUniqueId = () => {
    const randomNumber = Math.floor((Math.random() * 50) + 1);
    let hash = 0;
    for (let i = 0; i < randomNumber; i+=1) {
        let char = this.charCodeAt(i);
        hash = ((hash<<5)-hash)+char;
        hash = hash & hash;
    }
    return hash;
}