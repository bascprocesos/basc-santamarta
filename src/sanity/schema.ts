import { type SchemaTypeDefinition } from "sanity";

import blockContent from "./schemas/blockContent";
import category from "./schemas/category";
import posts from "./schemas/posts";
import author from "./schemas/author";
import testimonials from "./schemas/testimonials";
import team from "./schemas/team";
import suport from "./schemas/support";
import training from "./schemas/training";
import chapters from "./schemas/chapters";
import experience from "./schemas/experience";
import values from "./schemas/values";
import section from "./schemas/section";
import employee from "./schemas/employee";
import banner from "./schemas/banner";
import aboutUsPage from "./schemas/aboutUsPage";
import homePage from "./schemas/homePage";
import navbar from "./schemas/navbar";
import missionPage from "./schemas/missionPage";
import teamPage from "./schemas/teamPage";
import valuesPage from "./schemas/valuesPage";
import eticaPage from "./schemas/eticaPage";
import documentSection from "./schemas/documentSection";
import certificationPage from "./schemas/certificationPage";
import experiencePage from "./schemas/experiencePage";
import trainingPage from "./schemas/trainingPage";
import trainigCategory from "./schemas/trainigCategory";
import comunicationPage from "./schemas/comunicationPage";
import afiliates from "./schemas/afiliates";
import bascMundoPage from "./schemas/bascMundoPage";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    posts,
    author,
    category,
    blockContent,
    testimonials,
    suport,
    team,
    training,
    chapters,
    experience,
    values,
    section,
    employee,
    banner,
    navbar,
    documentSection,
    trainigCategory,
    afiliates,

    //PAGES
    homePage,
    aboutUsPage,
    missionPage,
    teamPage,
    valuesPage,
    eticaPage,
    certificationPage,
    experiencePage,
    trainingPage,
    comunicationPage,
    bascMundoPage,
  ],
};
