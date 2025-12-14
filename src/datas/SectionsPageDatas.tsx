
import { Code2, Smartphone, Palette, Pencil, Mail, Phone, MapPin } from 'lucide-react';
import { SectionsPage } from '../constants/SectionsPage';

export const AboutData = {
    title: "A Propos",
    description: "Passionné par la création numérique, je combine compétences techniques et sensibilité artistique pour des projets uniques.",
    stacks: [
        {
        icon: Code2,
        title: "Développement Web",
        description: "Applications fullstack modernes avec React, Node.js et bases de données",
        },
        {
        icon: Smartphone,
        title: "Apps Mobile",
        description: "Applications natives et cross-platform pour iOS et Android",
        },
        {
        icon: Palette,
        title: "Design Graphique",
        description: "Identités visuelles, UI/UX design et supports de communication",
        },
        {
        icon: Pencil,
        title: "Illustration",
        description: "Créations artistiques personnalisées et illustrations digitales",
        },
    ],
};

export const ContactsData = {
    title: "Contact",
    desciption: "Une idée de projet ? Discutons-en ensemble !",
    infos: [
        {
            icon: Mail,
            title: "Email",
            value: "pregovimb@gmail.com",
            href: "mailto:pregovimb@gmail.com",
        },
        {
            icon: Phone,
            title: "Téléphone",
            value: "+ (242) 05374 90 60, + (242) 06909 35 23",
            href: "tel:+24205374906",
        },
        {
            icon: MapPin,
            title: "Localisation",
            value: "Batignolles, Brazzaville, Congo",
            href: "#",
        },
    ],
    other: {
        title: "Disponibilité",
        content: "Je suis actuellement disponible pour des projets freelance et des collaborations.\n N'hésitez pas à me contacter !"
    }
}