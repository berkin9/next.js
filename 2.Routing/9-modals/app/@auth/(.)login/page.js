import Login from "@/app/ui/login";
import Modal from "@/app/ui/modal";

export default function AuthLogin(){//login componenti çağırdık. parellel auth route
    return(
        <Modal>
            <Login />
        </Modal>
    )
}