import { useRef } from "react"

import emailjs from '@emailjs/browser'

import { Flex, Heading, Img, Text, Accordion, AccordionItem, AccordionPanel, AccordionButton, AccordionIcon, Spacer, Box } from "@chakra-ui/react";

import '../index.css'

import Footer from "../components/Footer";

const Contact = () => {

  const form = useRef()

  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_ssxnzea", 'template_gtjm0kq', form.current, 'OcPW4sUWiBSb6YYby' )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

     
  };


  return(
<Flex h="fit-content" w="100%" flexDirection="column" gap="25px" align="center">

<Flex h="fit-content" w="100%" flexDirection={{base:"column", sm:"column", md:"column", lg:"row", xl:"row"}}  justify="space-between" gap="35px" >
  <Flex h={{base:"50%", sm:"50%", md:"50%", lg:"100%", xl:"100%"}} w={{base:"100%", sm:"100%", md:"100%", lg:"50%", xl:"50%"}} flexDirection="column" justify="center" align="center" rowGap="30px" p="8px">

<Flex flexDirection="column" rowGap="10px" p="8px">
<Heading fontSize="2rem" mb="35px">Get in touch</Heading>

<Heading as="h4" fontSize="1.2rem">Send a Message</Heading>
  <Text>
  Whether you’re looking for a personal trainer, a group class, or a home workout program, we have the perfect solution for you. Contact us now and we’ll help you find the best fit for your needs and preferences.
  </Text>

</Flex>
  
  <form ref={form} onSubmit={sendEmail} className="contact-form">
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
       <textarea style={{resize:"none"}} name="message" />
      <input type="submit" style={{fontSize:"16px", fontWeight:"bold", cursor:"pointer", background:"lightcoral", border:"none", padding:"5px"}} value="Send" />
    </form>
    
  </Flex>

  <Flex h={{base:"50%", sm:"50%", md:"50%", lg:"100%", xl:"100%"}} w={{base:"100%", sm:"100%", md:"100%", lg:"50%", xl:"50%"}} flexDirection="column" rowGap="50px">


<Flex flexDirection="column" rowGap="10px" p="8px">
<Heading fontSize="1.8rem">Call Us</Heading>
<Text>Feel free to call us to book a private training or session </Text>
<Flex columnGap="5px" align="center"> <i className="fa-solid fa-phone"></i> <Text>(+234)903-188-9024</Text></Flex>
</Flex>
{/*  */}
<Flex flexDirection="column" rowGap="10px" p="8px">
<Heading fontSize="1.8rem">Visit Us</Heading>
<Text>We have several branches, but you can stop by our HQ</Text>
<Flex columnGap="5px" align="center"> <i className="fa-solid fa-location-dot"></i> <Text>1234 Hilton drive </Text></Flex>
</Flex>


  </Flex>
</Flex>


<Flex h={{base:"400px", sm:"400px", md:"400px", lg:"400px", xl:"400px"}} w={{base:"100%", sm:"100%", md:"100%", lg:"700px", xl:"700px"}} justifyContent="center" alignItems="center" gap="25px">
<Img src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/pass/GoogleMapTA.jpg" h="100%" w="100%" p="8px"/>
</Flex>

<Flex h="fit-content" w="100%" flexDirection={{base:"column", sm:"column", md:"column", lg:"row", xl:"row"}}>
  <Flex h={{base:"50%", sm:"50%", md:"50%", lg:"100%", xl:"100%"}} w={{base:"100%", sm:"100%", md:"100%", lg:"50%", xl:"50%"}} flexDirection="column" gap="50px">

<Heading fontSize="1rem" color="grey">FAQ</Heading>
<Heading fontSize={{base:"2.5rem", sm:"2.5rem", md:"2.6", lg:"3rem", xl:"3.5rem"}}>Frequently Asked Questions</Heading>

  </Flex>
  <Flex h={{base:"50%", sm:"50%", md:"50%", lg:"100%", xl:"100%"}} w={{base:"100%", sm:"100%", md:"100%", lg:"50%", xl:"50%"}} flexDirection="column" rowGap="25px" justify="center" p="5px">

    <Text fontSize="1rem" fontWeight="bold">
     This are common question our cusomers ask, if the problem you have isn't stated here feel free to use the contact form or our email and hotline  
    </Text>

<Accordion  allowMultiple >
  <AccordionItem>
    <Heading >
      <AccordionButton>
        <Flex  align="center" flex='1' textAlign='left'>
         How can I contact customer service ?
        </Flex>
        <AccordionIcon/>
      </AccordionButton>

    </Heading>
    <AccordionPanel>
     You can reach our customer service team via email at badtrailz@gmail.com or +234-903-188-9024.
    </AccordionPanel>
    {/*  */}
  </AccordionItem>
  <AccordionItem>
    <Heading >
      <AccordionButton>
        <Flex  flex="1" textAlign="left" >
         What is your Subscription policy ?
        </Flex>
        <AccordionIcon/>
      </AccordionButton>

    </Heading>
    <AccordionPanel>
      Our return policy allows you to cancel your subscription anytime you feel like and pick up where you left of without any added charges. 
    </AccordionPanel>
  </AccordionItem>
  {/*  */}
  <AccordionItem >
    <Heading >
      <AccordionButton>
        <Flex  align="center"  flex='1' textAlign='left'>
       Do you offer trial periods for your services ? 
        </Flex>
        <AccordionIcon/>
      </AccordionButton>

    </Heading>
    <AccordionPanel>
Yes, we often provide trial periods for our services automatically.
    </AccordionPanel>
  </AccordionItem>
  {/*  */}
  <AccordionItem >
    <Heading >
      <AccordionButton>
        <Flex  align="center"  flex='1' textAlign='left'>
          Can I provide feedback or suggestions ?
        </Flex>
        <AccordionIcon/>
      </AccordionButton>

    </Heading>
    <AccordionPanel>
     Absolutely! We value your feedback. Feel free to share your thoughts and suggestions through our contact form or email.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
 
  </Flex>
</Flex>

<Footer/>


</Flex>


  )
}

export default Contact


