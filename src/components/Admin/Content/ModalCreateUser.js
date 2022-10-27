import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc';

const ModalCreateUser = (props) => {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [role, setRole] = useState('USER');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState('');

    const handleUpdateIamge = (e) => {
        if(e.target && e.target.files && e.target.files[0]) {
            setPreviewImage(URL.createObjectURL(e.target.files[0]));
        }
        else setPreviewImage(null);
    }
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
  
        <Modal show={show} onHide={handleClose} size="xl" backdrop="static" className='modal-add-user'>
          <Modal.Header closeButton>
            <Modal.Title>Create new user</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form className="row g-3">
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Email</label>
                <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Password</label>
                <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <div className="col-md-6">
                <label for="inputCity" className="form-label">Username</label>
                <input type="text" className="form-control" id="inputCity" value={username} onChange={(e) => setUsername(e.target.value)}/>
              </div>
              <div className="col-md-4">
                <label for="inputState" className="form-label">Role</label>
                <select id="inputState" className="form-select" onChange={(e) => setRole(e.target.value)} value={role}>
                  <option value="USER">USERS</option>
                  <option value="ADMIN">ADMIN</option>
                </select>
              </div>
              <div className='col-md-12'>
                <label className="form-label label-upload" htmlFor='labelUpload'> <FcPlus/> Upload File Image</label>
                <input type="file" hidden id="labelUpload" onChange={(e) => handleUpdateIamge(e)}/>
              </div>

              <div className='col-md-12 img-preview'>
                {previewImage ? <img src={previewImage} /> : <span>Preview image</span>}
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

  export default ModalCreateUser;