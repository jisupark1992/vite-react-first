import Avatar from "./Avatar";
import Card from "./Card";

export default function Profile() {
  const person = {
    imageUrl: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg',
    name: 'kim',
  }
  const size = 90;
    return (
      <>
        <Card>
          <Avatar person={person} size={size}/>
        </Card>
      </>
    );
}