import { UserInfo } from "../types/UserInfoType";

type Props = {
    userInfo: UserInfo,
};

export default function Header(props: Props){
    return <div>
        <h1>hua</h1>
        <p>Hello, {props.userInfo.firstName}</p>
    </div>
};