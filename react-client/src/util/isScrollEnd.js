export default (element) => {
    return (element.scrollHeight - element.scrollTop === element.clientHeight)
}