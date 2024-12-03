import { createClient, groq } from "next-sanity";

import clientConfig from "./config";

async function getBlogs() {
  try {
    return await createClient(clientConfig).fetch(groq`*[_type == "post"] {
  "slug": slug.current,
    title,
    description,
    _id,
    publishedAt,
    "alt": mainImage.alt,
    "mainImage": mainImage.asset->url,
    "category": category->title,

}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getMission() {
  try {
    return await createClient(clientConfig)
      .fetch(groq`*[_type == 'mission'][0] {
    banner{
      title,
      "image": image.asset->url
    },
    sections[]{
      title,
      description,
      type,
      position,
      "video": video.asset->url,
      "image": image.asset->url
    }
  }`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getEticaPage() {
  try {
    return await createClient(clientConfig).fetch(groq`*[_type == 'etica'] [0]{
     banner{
      title,
      "image": image.asset->url
    },
    files[]{
      fileTitle,
      "url":file.asset->url
    }
  }`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getCertificationPage() {
  try {
    return await createClient(clientConfig)
      .fetch(groq`  *[_type == 'certificationPage'] [0]{
     banner{
      title,
      "image": image.asset->url
    },
    filesSection[]{
      title,
      description,
      files[]{
        fileTitle,
        "url":file.asset->url
      }
    }
  }`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getHome() {
  try {
    return await createClient(clientConfig).fetch(groq`
      *[_type == 'home'][0] {
        title,
        heroBanner[]{
          type,
          "video": video.asset->url,
          "image": image.asset->url
        },
        section{
          title,
          description,
          position,
          type,
          "video": video.asset->url,
          "image": image.asset->url
        },
        selectedDepartment->{
          _id,
          name,
          details,
          "image": image.asset->url

        }
      }
    `);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getAbout() {
  try {
    return await createClient(clientConfig).fetch(groq`
      *[_type == 'about'][0] {
        section{
          title,
          description,
          position,
          type,
          "video": video.asset->url,
          "image": image.asset->url
        },
      }
    `);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getTeamPage() {
  try {
    return await createClient(clientConfig).fetch(groq`
     *[_type == 'teamPage'] [0]{
      banner{
        title,
        "image": image.asset->url
       },
      selectedDepartment->{
        _id,
        name,
      }
  }
    `);
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function getTrainingPage() {
  try {
    return await createClient(clientConfig).fetch(groq`
     *[_type == 'trainingPage'] [0]{
      banner{
        title,
        "image": image.asset->url
       },
      filesSection[]{
      title,
      description,
      files[]{
        fileTitle,
        "url":file.asset->url
      }
    }
  }
    `);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getComunicationsPage() {
  try {
    return await createClient(clientConfig).fetch(groq`
     *[_type == 'comunicationPage'] [0]{
      banner{
        title,
        "image": image.asset->url
       },
  }
    `);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getBascMundoPage() {
  try {
    return await createClient(clientConfig).fetch(groq`
      *[_type == 'bascMundoPage'][0] {      
     banner{
        title,
        "image": image.asset->url
       },
       "image": image.asset->url,
        selectedDepartment->{
          _id,
          name,
          details,
          "image": image.asset->url

        }
      }
    `);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getExperience() {
  try {
    return await createClient(clientConfig)
      .fetch(groq`  *[_type == 'experiencePage'] [0]{
     banner{
      title,
      "image": image.asset->url
    },
    experiences[]{
      benefits,
      title,
      type,
      "video": video.asset->url,
      "image": image.asset->url
    }
  }`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getLearning() {
  try {
    return await createClient(clientConfig).fetch(groq`*[_type == 'training'] {
    url,
    date,
    type,
    description,
    _id,
    title,
    place,
    "image": image.asset->url,
    "altimage": image.alt,
    "category": category->title,
    "slug": slug.current
}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getChapters() {
  try {
    return await createClient(clientConfig).fetch(
      groq`*[_type == 'chapters'] {
  country,
  _id
} `
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getValues() {
  try {
    return await createClient(clientConfig).fetch(
      groq`*[_type == 'valuesPage'] [0]{
      banner{
        title,
        "image": image.asset->url
      },
      values[]{
        description,
        value,
        "image": background_image.asset->url,
        "alt": background_image.alt
      }
    }`
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getTeam(chaptertId: string) {
  try {
    return await createClient(clientConfig).fetch(
      groq`
      *[_type == "employee" && capitulo._ref == $chaptertId][] {
        name,
        position,
        _id,
        "image": image.asset->url,
        "capitulo": capitulo->name
      }
    `,
      {
        chaptertId,
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getAfiliates(chaptertId: string) {
  try {
    return await createClient(clientConfig).fetch(
      groq`
      *[_type == "afiliates" && capitulo._ref == $chaptertId][] {
        name,
         url,
         contact,
        "image": image.asset->url,
       }
    `,
      {
        chaptertId,
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getEvent(slug: string) {
  try {
    return await createClient(clientConfig).fetch(
      groq`
    *[_type == 'training' && slug.current == $slug][0]{
      place,
      title,
      date,
      url,
      description,
      type,
      "image": image.asset->url,
      banner{
        title,
        "image": image.asset->url
      },
} `,
      {
        slug,
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function getPost(slug: string) {
  try {
    return await createClient(clientConfig).fetch(
      groq`
    *[_type == 'post' && slug.current == $slug][0]{
      body,
      title,
      description,
      type,
      "mainImage": mainImage.asset->url,
      type,
      "video": video.asset->url,
      "image": image.asset->url,
      filesSection[]{
        title,
        description,
        files[]{
          fileTitle,
          "url":file.asset->url
        }
     }
} `,
      {
        slug,
      }
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getTestimonials() {
  try {
    return await createClient(clientConfig).fetch(
      groq`*[_type == "testimonials"] {
  name,
  description,
  position,
  "image": image.asset->url,
  "alt": image.alt
}`
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getSupport() {
  try {
    return await createClient(clientConfig).fetch(
      groq`*[_type == "support"] {
  name,
  "image":  image.asset->url,
  url

}`
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}
async function getNavBar() {
  try {
    return await createClient(clientConfig).fetch(
      groq` *[_type == "navbar" ][0] {
      items[]{
        title,
        href,
        submenu[]{
          title,
          href
        }
      }
}`
    );
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export {
  getBlogs,
  getTestimonials,
  getTeam,
  getAfiliates,
  getEvent,
  getPost,
  getSupport,
  getValues,
  getLearning,
  getChapters,
  getMission,
  getHome,
  getExperience,
  getNavBar,
  getAbout,
  getTeamPage,
  getEticaPage,
  getCertificationPage,
  getTrainingPage,
  getComunicationsPage,
  getBascMundoPage,
};
