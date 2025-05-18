function Hello(props) {
    const { name } = props;

    return (
        <div>
            <h2>Hello React</h2>
            <p>Saya {name} - Frontend Engineer</p>
        </div>
    );
}

export default Hello;