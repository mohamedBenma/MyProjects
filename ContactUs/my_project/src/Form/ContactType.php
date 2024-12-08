<?php

namespace App\Form;

use App\Entity\Contact;
use App\Entity\Departement;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\ChoiceType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('nom', TextType::class, [
                'label' => 'Nom: ',])
            ->add('prenom',TextType::class, [
                'label' => 'Prénom: ',])
            
            ->add('mail',TextType::class, [
                'label' => 'Adresse Mail: ',])
            ->add('message',TextType::class, [
                'label' => 'Message: ',])

            ->add ('Departement',EntityType::class, [
                'class'=>Departement::class,
                'label' => 'Département :',
                'choice_label' => 'nom',
                'mapped'=>false
            ])
            ->add('submit', SubmitType::class)
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => Contact::class,
            "allow_extra_fields" => true
        ]);
    }
}
