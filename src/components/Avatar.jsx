export default function Avatar({person, size=200}) {
    return (
        <img
            className="avatar"
            src={person.imageUrl}
            alt={person.name}
            width={size}
            height={size}
        />
    );
}