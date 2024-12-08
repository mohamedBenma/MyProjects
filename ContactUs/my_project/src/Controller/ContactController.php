<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Entity\Departement;
use App\Form\ContactType;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Email;


 /**
  * 
  */
class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="app_contact")
     */
    public function index(): Response
    {
        return $this->render('contact/SendMail.html.twig', [
        ]);
    }

    /**
     * @Route("/contact/new", name="newapp_contact")
     */
    public function addContact(Request $request,ManagerRegistry $doctrine,MailerInterface $mailer): Response
    {
        $con=$doctrine->getManager();
        $Contact= new Contact();
        $c=new Contact();
        $departement=new Departement();
    

        $contactForm=$this->createForm(ContactType::class,$Contact);

        $contactForm->handleRequest($request);
        if ($contactForm->isSubmitted() && $contactForm->isValid()){
            $data = $contactForm;
            $emailContact=$data['mail']->getData();
            $nameContact=$data['nom']->getData().' '.$data['prenom']->getData();
            $messageSent=$data['message']->getData();
            $dpt=$data['Departement']->getData()->getNom();
            $departement=$doctrine->getRepository(Departement::class)->findOneBy(['nom' => $dpt]);
            $namedepartement=$departement->getNom();
            $nameResponsable=$departement->getResponsable();
            $emailResponsable=$departement->getResponsableMail();      
            $con->persist($Contact);
            $con->flush();
            $email = (new Email())
            ->from($emailContact)
            ->to($emailResponsable)
            ->subject($messageSent)
            ->text('Sending emails is fun again!');
        $mailer->send($email);
        $this->addFlash(
            'succès',
            'votre demande a été bien transmise!'
        );
        return $this->renderform('contact/sendMail.html.twig',[
            'senderName'=>$nameContact,
                'senderMail'=>$emailContact,
                'responsableName'=>$nameResponsable,
                'responsableName'=>$nameResponsable,
                'responsableMail'=>$emailResponsable,
                'departementName'=>$namedepartement,
                'messageSent'=>$messageSent
        ]);
    }
        return $this->renderForm('contact/add.html.twig',[
            'contactForm' => $contactForm,
            'controller_name' => 'Fiche Contact'


        ]);
    }
}
