const PersonComponent = ({ name, id, onSelect}) => {
    return (
    <>
        <button>
            <span className="" onClick={(e) => onSelect(id)}>{name}</span>
        </button>
    </>
    );
};

export default PersonComponent;