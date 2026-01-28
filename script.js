'use strict';

const { jsPDF } = window.jspdf;
let currentLetter = '';
let currentLanguage = 'fr';
let letterLanguage = 'fr';

const translations = {
    fr: {
        headerSubtitle: 'Générateur professionnel de lettres de motivation bilingues',
        jobOptions: [
            { value: '', text: '-- Sélectionnez votre type de recherche --' },
            { value: 'stage-dev', text: '💻 Stage en développement web' },
            { value: 'alternance-marketing', text: '📊 Alternance en marketing digital' },
            { value: 'premier-emploi', text: '👔 Premier emploi (secteur commercial)' },
            { value: 'autre', text: '🔍 Autre (décrivez ci-dessous)' }
        ],
        previewEmpty: 'Votre lettre apparaîtra ici...',
        loading: 'Génération en cours...',
        successGenerated: '✅ Lettre générée avec succès !',
        successPDF: '✅ PDF téléchargé avec succès !',
        errorName: '❌ Veuillez entrer votre nom complet.',
        errorJobType: '❌ Veuillez sélectionner un type de recherche.',
        errorSkills: '❌ Veuillez indiquer vos compétences.',
        errorNoLetter: '❌ Veuillez d\'abord générer une lettre.',
        welcome: '👋 Bienvenue ! Remplissez le formulaire.'
    },
    en: {
        headerSubtitle: 'Professional bilingual cover letter generator',
        jobOptions: [
            { value: '', text: '-- Select your position type --' },
            { value: 'stage-dev', text: '💻 Web development internship' },
            { value: 'alternance-marketing', text: '📊 Digital marketing apprenticeship' },
            { value: 'premier-emploi', text: '👔 First job (commercial sector)' },
            { value: 'autre', text: '🔍 Other (describe below)' }
        ],
        previewEmpty: 'Your letter will appear here...',
        loading: 'Generating...',
        successGenerated: '✅ Letter generated successfully!',
        successPDF: '✅ PDF downloaded successfully!',
        errorName: '❌ Please enter your full name.',
        errorJobType: '❌ Please select a position type.',
        errorSkills: '❌ Please indicate your skills.',
        errorNoLetter: '❌ Please generate a letter first.',
        welcome: '👋 Welcome! Fill out the form.'
    }
};

// Les fonctions JS pour changer la langue, générer la lettre, PDF, validation, etc.
// (Colle ici tout le reste de ton JS que tu m’as envoyé)
