
import boy from "../assets/boy.svg";
import girl from "../assets/girl.svg";

const User = ({item,deleteUser}) => {
  return (
    <>
      <li
        style={{
          borderStyle: "solid",
          borderColor: item.gender == "male" ? "green" : "pink",
        }}
      >
        <img src={item.gender == "male" ? boy : girl} width={50} height={50} />
        <p>{item.name} </p>
        <div className="control">
          <button onClick={()=>deleteUser(item.id)}>ลบ</button>
        </div>
      </li>
    </>
  );
};

export default User;
