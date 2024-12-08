<?php

namespace App\DataFixtures;

use App\Entity\Contact;
use App\Entity\Departement;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class DepartementFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $departement=[
            1=>[
                'nom' => 'Dev',
                'responsable' => 'Willson Armand',
                'responsable_mail' => 'Wilson.Armand@contact.com'

            ],
            2=>[
                'nom' => 'Direction',
                'responsable' => 'Nathan Scott',
                'responsable_mail' => 'Nathan.Scott@contact.com'
            ],
            3=>[
                'nom' => 'Communications',
                'responsable' => 'Anais Lefevre',
                'responsable_mail' => 'Anais.Lefevre@contact.com'
            ],
            4=>[
                'nom' => 'Ressources Humaines',
                'responsable' => 'Melanie Becker',
                'responsable_mail' => 'Melanie.Becker@contact.com'
            ],
        ];
        foreach($departement as $key=>$value){
            $departement = new Departement();
            $departement->setNom($value['nom']);
            $departement->setResponsable($value['responsable']);
            $departement->setResponsableMail($value['responsable_mail']);
            $manager->persist($departement);
        }
        $manager->flush();
    }
    
}
