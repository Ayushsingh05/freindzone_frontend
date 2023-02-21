import React, { useState } from 'react'
import logo from '../../img/logo.PNG';
import home from '../../img/home.PNG'
import messenger from '../../img/messenger.PNG'
import add from '../../img/add.PNG'
import explore from '../../img/explore.PNG'
import like from '../../img/like.PNG'
import { useDisclosure } from '@chakra-ui/react';
import Cookies from 'universal-cookie';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { postImages } from '../../Redux/Action';
export const Navbar = () => {
  const dispatch=useDispatch();
  const cookies = new Cookies();
  const token= cookies.get('jwt')
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null)
const store = useSelector(store=>store.postImages)
  const [obj,setObj]=useState({post_title:"",post_body:"",post_pic_url:""})

  const handleChange=(e)=>{
    setObj({...obj,[e.target.name]:e.target.value});
  }


  const handleSubmit = async () => {
    console.log(obj);
    try{
      const res = await fetch('http://localhost:8080/post/createpost', {
      method: 'POST',
      body: JSON.stringify(obj),
      headers:{
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token,
      }
    })
    const data= await res.json();
    dispatch(postImages([...store,data.data]))
    console.log(data);
    onClose();
  }catch(e){
      console.log(e);
    }
  };
  return (
    <>
    <nav class="navbar">
    <div class="nav-wrapper">
        <img src={logo} class="brand-img" alt=""/>
    
        <input type="text" class="search-box" placeholder="search"/>
        <div class="nav-items">
            <img src={home} class="icon" alt=""/>
            <img src={messenger} class="icon" alt=""/>
            <img src={add}class="icon" alt="" onClick={onOpen} />
            <img src={explore}class="icon" alt=""  />
            <img src={like} class="icon" alt=""/>
            <div class="icon user-profile"></div>
        </div>
    </div>
</nav>

      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Post</ModalHeader>
          <ModalCloseButton />
           <Input type='text' name='post_title' placeholder='Post Title' onChange={handleChange} />
           <Input type='text' name='post_body'  placeholder=' Post Details' onChange={handleChange} />
           <Input type='text' name='post_pic_url' onChange={handleChange}/>
            <Button type='submit' colorScheme='blue' mr={3} onClick={handleSubmit} >
              Submit
            </Button>
        </ModalContent>
      </Modal>
</>
  )
}
