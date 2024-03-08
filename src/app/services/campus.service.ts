import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface Campus {
  state: string;
  school: String;
  email?: string;
  location?: string;
}

@Injectable({
  providedIn: 'root',
})
export class CampusService {
  private campuses: Campus[] = [
    {
      school: 'College Of Health Sciences & Management',
      email: 'wcfcollegeofhealth@gmail.com',
      location: 'Aba',
      state: 'Abia',
    },
    {
      school: 'Abia State University (Absu)  Uturu',
      email: 'winnerscampusfellowshipabsu@gmail.com',
      location: 'Uturu',
      state: 'Abia',
    },
    {
      school: 'Abia State University (Absu) Umuahia Campus 2',
      location: 'Umuahia',
      state: 'Abia',
    },
    {
      school: 'Temple Gate Polytechnic Chapter Aba',
      email: 'wcftgpachapter@gmail.com',
      location: 'Aba',
      state: 'Abia',
    },
    {
      school: 'University of Uyo',
      email: 'wcfuniuyo@gmail.com ',
      location: 'Uyo',
      state: 'Akwa Ibom',
    },
    {
      school: 'Akwa Ibom State University',
      email: 'wcfaksu2016@yahoo.com ',
      location: 'Uyo',
      state: 'Akwa Ibom',
    },
    {
      school: 'Heritage Polytechnic Eket ',
      email: 'Wcfheritagepoly@yahoo.com',
      location: 'Eket',
      state: 'Akwa Ibom',
    },
    {
      school: 'Akwa Ibom State Polytechnic',
      email: 'winnerscampusakwapoly@gmail.com',
      location: 'Uyo',
      state: 'Akwa Ibom',
    },
    {
      school: 'Federal University Otueke ',
      location: 'Yenagoa',
      state: 'Bayelsa',
    },
    {
      school: 'Niger Delta University Amassoma',
      email: 'wcfamassoma@gmail.com',
      location: 'Amassoma',
      state: 'Bayelsa',
    },
    {
      school: 'College Of Health Technology',
      email: 'wcfcohtech2018@yahoo.com',
      location: 'Calabar',
      state: 'Cross River',
    },
    {
      school: 'University of Calabar',
      email: 'wcfunical@gmail.com',
      location: 'Calabar',
      state: 'Cross River',
    },
    {
      school: 'Cross River University of Technology(CRUTECH)',
      email: 'wcfcrutech@gmail.com',
      location: 'Calabar',
      state: 'Cross River',
    },
    {
      school: 'Cross River University of Technology(CRUTECH) ',
      email: 'winnerscampusfellowshipogoja@gmail.com',
      location: 'Ogoja',
      state: 'Cross River',
    },
    {
      school: 'Cross River University of Technology(CRUTECH',
      location: 'Okuku',
      state: 'Cross River',
    },
    {
      school: 'Cross River University of Technology(CRUTECH)',
      location: 'Obubra',
      state: 'Cross River',
    },
    {
      school: 'Cross River State College of Education',
      email: 'wcfcoeakamkpa19@gmail.com',
      location: 'Akamkpa',
      state: 'Cross River',
    },
    {
      school: 'Delta state university, Abraka.',
      location: 'Abraka',
      state: 'Delta',
    },
    {
      school: 'Delta state polytechnic ozoro',
      location: 'Ozoro',
      state: 'Delta',
    },
    {
      school: 'Delta state polytechnic otefe-oghara',
      location: 'Otefe',
      state: 'Delta',
    },
    {
      school: 'Petroleum Training Institute',
      location: 'Effurun',
      state: 'Delta',
    },
    {
      school: 'Federal University of Petroleum Resources, Effurun',
      location: 'Effurun',
      state: 'Delta',
    },
    {
      school: 'College of Education, Agbor',
      email: 'wcfagbor@gmail.com',
      location: 'Agbor',
      state: 'Delta',
    },
    {
      school: 'Delta State College of Education Mosogar',
      email: 'wcfdescoem@gmail.com',
      location: 'Mosogar',
      state: 'Delta',
    },
    {
      school: 'Wcf Ebonyi State University Presco Campus ',
      state: 'Ebonyi',
    },
    {
      school: 'Fed Poly Uwana Afikpo',
      state: 'Ebonyi',
    },
    {
      school: 'Alex Ekwueme Fed Uni (Funai)',
      state: 'Ebonyi',
    },
    {
      school: 'Ambrose Alli Uni.',
      location: 'Ekpoma',
      state: 'Edo',
    },
    {
      school: 'Edo State Poly ',
      state: 'Edo',
    },
    {
      school: 'University of Benin Ugbowo Campus ',
      location: 'Ugbowo',
      state: 'Edo',
    },
    {
      school: 'Ambrose Alli University (Aau) Campus',
      state: 'Edo',
    },
    {
      school: 'University of Benin Ekewan Campus',
      state: 'Edo',
    },
    {
      school: 'Auchi Polytechnic',
      location: 'Auchi',
      state: 'Edo',
    },
    {
      school: 'Enugu State University Teaching (Agabni)',
      state: 'Enugu',
    },
    {
      school: 'University of Nigeria Nnsuka',
      state: 'Enugu',
    },
    {
      school: 'University of Nigeria Enugu Campus',
      state: 'Enugu',
    },
    {
      school: 'IMT',
      state: 'Enugu',
    },
    {
      school: 'Esuth (Msp)',
      state: 'Enugu',
    },
    {
      school: 'Federal Polytechnic Nekede ',
      email: 'wcfnekedepoly@gmail.com',
      location: 'Owerri',
      state: 'Imo',
    },
    {
      school: 'Federal University Of Technology Owerri',
      email: 'wcffuto19@gmail.com',
      location: 'Owerri',
      state: 'Imo',
    },
    {
      school: 'Imo State University ',
      email: 'wcfimsu@yahoo.com',
      location: 'Owerri',
      state: 'Imo',
    },
    {
      school: 'Alvan Ikoku College Of Education Owerri ',
      location: 'Owerri',
      state: 'Imo',
    },
    {
      school: 'Rivers State University Of Education',
      state: 'Rivers',
    },
    {
      school: 'Ken Sarowiwa Polytechnic, Bori',
      location: 'Bori',
      state: 'Rivers',
    },
    {
      school: 'Rivers State University',
      location: 'Port Harcourt',
      state: 'Rivers',
    },
    {
      school: 'University Of Port Harcourt',
      state: 'Rivers',
    },
    {
      school: 'Ekiti State University ',
      email: 'wcfanniversary@gmail.com',
      location: 'Ekiti',
      state: 'Ekiti',
    },
    {
      school: 'Federal University FUOYE Ikole Campus',
      email: 'wcffuoyesatelite@gmail.com',
      location: 'Ikole',
      state: 'Ekiti',
    },
    {
      school: 'Fed. Polytechnic, Ado-Ekiti',
      email: 'wcffpa@gmail.com',
      location: 'Ado-Ekiti',
      state: 'Ekiti',
    },
    {
      school: 'Fed. Polytechnic Satellite Campus',
      email: 'wcffedpolysatellite@gmail.com',
      state: 'Ekiti',
    },
    {
      school: 'Federal University Oye Chapter',
      email: 'wcfoye@gmail.com',
      location: 'Oye',
      state: 'Ekiti',
    },
    {
      school: 'Crown Polytechnic',
      email: 'wcfcrownpolytechnic@gmail.com',
      state: 'Ekiti',
    },
    {
      school:
        'Emmanuel Alayande College of Education/ Ekiti State University Oye.  ',
      location: 'Oye',
      state: 'Ekiti',
    },
    {
      school: 'Federal Polytechnic Offa',
      location: 'Offa',
      state: 'Kwara',
    },
    {
      school: 'Kwara State Polytechnic',
      location: 'Ilorin',
      state: 'Kwara',
    },
    {
      school: 'University of Ilorin',
      state: 'Kwara',
    },
    {
      school: 'Lagos State Polytechnic',
      email: 'wcflaspotech@yahoo.com',
      state: 'Lagos',
    },
    {
      school: 'Micheal Otedola College of Primary Education',
      email: 'winnersmocped@gmail.com',
      state: 'Lagos',
    },
    {
      school: 'Nigerian French Language Village',
      email: 'nflvwcf@gmail.com',
      location: 'Ajara Badagry',
      state: 'Lagos',
    },
    {
      school: 'Lagos State University',
      email: 'wcflasuepe@yahoo.com',
      location: 'Epe',
      state: 'Lagos',
    },
    {
      school: 'Nig. French language village campus fellowship Badary.',
      email: 'Winnersfellowship_nflv@gmail.com',
      location: 'Badagry',
      state: 'Lagos',
    },
    {
      school: 'Yaba College of Technology,',
      email: 'wcfyabatech@gmail.com',
      location: 'Yaba',
      state: 'Lagos',
    },
    {
      school: 'University of Lagos',
      state: 'Lagos',
    },
    {
      school: 'Adeniran Ogunsanya College of Education',
      email: 'wcfacoed@gmail.com',
      state: 'Lagos',
    },
    {
      school: 'University of Lagos Medical College',
      email: 'wcfunilagmed@gmail.com',
      state: 'Lagos',
    },
    {
      school: 'Lagos State University',
      state: 'Lagos',
    },
    {
      school: 'Federal College of Fishery and Marine Technology',
      state: 'Lagos',
    },
    {
      school: 'WCF OOU CAS,AYETORO',
      location: 'Ayetoro',
      state: 'Ogun',
    },
    {
      school: 'Fed. Polytechnic, Ilaro',
      email: 'wcf.fedpolyilaro@gmail.com',
      location: 'Ilaro',
      state: 'Ogun',
    },
    {
      school: 'MaPoly Ogun Chapter',
      email: 'info@mapoly.edu.ng',
      state: 'Ogun',
    },
    {
      school: 'FUNAAB',
      email: 'wcffunaab@gmail.com',
      state: 'Ogun',
    },
    {
      school: 'Pogil College of Health Technology Okeeri',
      email: 'pogilwcfokeeri@gmail.com',
      location: 'Ijebu-Ode',
      state: 'Ogun',
    },
    {
      school: 'Olabisi Onabanjo University Ago Iwoye',
      email: 'wcfoouagoiwoye@gmail.com',
      location: 'Ago Iwoye',
      state: 'Ogun',
    },
    {
      school: 'Ogun State College of Health',
      email: 'wcfogscohtechilese@gmail.com',
      location: 'Ilese',
      state: 'Ogun',
    },
    {
      school: 'Ogun State Institute of Technology',
      state: 'Ogun',
    },
    {
      school: 'Tai Slarin Uni of Education',
      location: 'Ijebu Ode',
      state: 'Ogun ',
    },
    {
      school: 'Gatway ICT Polytechnic',
      location: 'Saapade',
      state: 'Ogun ',
    },
    {
      school: 'DS Adegbenro ICT Polytechnic',
      location: 'Itori',
      state: 'Ogun ',
    },
    {
      school: 'Fed. College of Education ',
      email: 'wcfosiele@gmail.com',
      location: 'Osiele',
      state: 'Ondo',
    },
    {
      school: 'Olabisi Onabanjo University Teaching Hospital',
      email: 'wcfoouth@gmail.com',
      state: 'Ondo',
    },
    {
      school: 'Fed. University of Technology',
      email: 'wcffuta@gmail.com',
      location: 'Akure',
      state: 'Ondo',
    },
    {
      school: 'Adekunle Ajasin University',
      email: 'wcfaaua2018@gmail.com',
      location: 'Akungba',
      state: 'Ondo',
    },
    {
      school: 'Achievers University',
      email: 'wcfauo@gmail.com',
      location: 'Owo',
      state: 'Ondo',
    },
    {
      school: 'Ondo State College of Health Technology',
      email: 'wsfchta19@gmail.com',
      location: 'Akure',
      state: 'Ondo',
    },
    {
      school: 'Rufus Giwa Polytechnic',
      email: 'wcfrugipo@gmail.com',
      location: 'Owo',
      state: 'Ondo',
    },
    {
      school: 'Adeyemi College ',
      email: 'wcface9@gmail.com',
      location: 'Ondo',
      state: 'Ondo',
    },
    {
      school: 'Fed. College of Agriculture',
      email: 'wcffeca@gmail.com',
      location: 'Akure',
      state: 'Ondo',
    },
    {
      school: 'Ondo State University of Science & Tech.',
      email: 'wcfosustech@gmail.com',
      state: 'Ondo',
    },
    {
      school: 'Osun State College of Technology',
      email: 'wcfoscotech@gmail.com',
      location: 'Esa-Oke',
      state: 'Osun',
    },
    {
      school: 'Osun State College of Health Technology',
      email: 'lfcolomilagbala2017@gmail.com',
      location: 'Ilesa',
      state: 'Osun',
    },
    {
      school: 'Interlink Polytechnic',
      email: 'wcfinterlink@gmail.com',
      location: 'Ijebu-jesa',
      state: 'Osun',
    },
    {
      school: 'Osun State Polytechnic, IREE',
      email: 'wcfiree@gmail.com',
      state: 'Osun',
    },
    {
      school: 'Oduduwa University',
      email: 'wcfoui@yahoo.com',
      state: 'Osun',
    },
    {
      school: 'Obafemi Awolowo University',
      email: 'wcfoauife@gmail.com',
      location: 'Ile-ife',
      state: 'Osun',
    },
    {
      school: 'Fed. Polytechnic, Ede',
      email: 'wcfede1697@gmail.com',
      location: 'Ede',
      state: 'Osun',
    },
    {
      school: 'Emmanuel Alayande College of Education',
      email: 'wcfemmanuelalayande@gmail.com',
      location: 'Oyo',
      state: 'Oyo',
    },
    {
      school: 'University of Ibadan (Post Graduate)',
      email: 'wcpgfui@gmail.com',
      location: 'Ibadan',
      state: 'Oyo',
    },
    {
      school: 'University of Ibadan (Undergraduate)',
      email: 'wcfui@yahoo.com',
      location: 'Ibadan',
      state: 'Oyo',
    },
    {
      school: 'Ladoke Akintola University of Technology',
      email: 'wcflautechogb@gmail.com',
      location: 'Ogbomoso',
      state: 'Oyo',
    },
    {
      school: 'Fed. School of Surveying',
      email: 'winnersfssoyo@gmail.com',
      location: 'Oyo',
      state: 'Oyo',
    },
    {
      school: 'Federal Polytechnic ',
      location: 'Mubi',
      state: 'Adamawa',
    },
    {
      school: 'Federal College of Education Yola.',
      location: 'Yola',
      state: 'Adamawa',
    },
    {
      school: 'Modibo Adama University of Technology',
      email: 'wcfmautechglory@gmail.com',
      location: 'Yola',
      state: 'Adamawa',
    },
    {
      school: 'Adamawa State University Mubi (adsu)',
      location: 'Mubi',
      state: 'Adamawa',
    },
    {
      school: 'State Polythenic Yola (spy)',
      email: 'wcfstatepolytechnicyola@yahoo.com',
      location: 'Yola',
      state: 'Adamawa',
    },
    {
      school: 'Abubakar Tafawabalewa University ',
      location: 'Bauchi',
      state: 'Bauchi',
    },
    {
      school: 'Federal Polytechnic Bauchi',
      location: 'Bauchi',
      state: 'Bauchi',
    },
    {
      school: 'Aliyu Tatali Ali Polytechnic Bauchi',
      location: 'Bauchi',
      state: 'Bauchi',
    },
    {
      school: 'Benue State Polytechnic',
      location: 'Ugbokolo',
      state: 'Benue',
    },
    {
      school: 'University of Agriculture Makurdi',
      location: 'Makurdi',
      state: 'Benue',
    },
    {
      school: 'Nigerian Army Institute of Technology and Environmental Studies',
      location: 'Makurdi',
      state: 'Benue',
    },
    {
      school: 'Benue State University,Makurdi ',
      location: 'Makurdi',
      state: 'Benue',
    },
    {
      school: 'Benue State Polytechnic',
      location: 'Makurdi',
      state: 'Benue',
    },
    {
      school: 'Nigerian army university biu',
      location: 'Biu',
      state: 'Borno',
    },
    {
      school: 'Federal Polytechnic Damaturu',
      location: 'Damaturu',
      state: 'Borno',
    },
    {
      school: 'University Of Abuja',
      email: 'wcfuniabuja@gmail.com',
      location: 'Gwagwalada',
      state: 'FCT',
    },
    {
      school: 'FCT College Of Education Zuba',
      location: 'Zuba',
      state: 'FCT',
    },
    {
      school: 'Federal College of Education',
      location: 'Gombe',
      state: 'Gombe',
    },
    {
      school: 'Gombe State University',
      state: 'Gombe',
    },
    {
      school: 'Federal University Kashere',
      location: 'Kashere',
      state: 'Gombe',
    },
    {
      school: 'Husseini Adamu Federal Polytechnic, ',
      location: 'kazaure',
      state: 'jigawa',
    },
    {
      school: 'Ahmadu Bello University Zaria',
      email: 'wcfabu1zaria@gmail.com',
      location: 'Samaru',
      state: 'Kaduna',
    },
    {
      school: 'Kaduna Polytechnic',
      state: 'Kaduna',
    },
    {
      school: 'Nuhu Bamalli Polythecnic, Zaria',
      state: 'kaduna',
    },
    {
      school: 'Nuhu Bamali Polytechnic Upe',
      email: 'wcfnubapoly@gmail.com',
      state: 'kaduna',
    },
    {
      school: 'Kaduna State University ',
      state: 'Kaduna',
    },
    {
      school: 'Bayero university, kano',
      state: 'Kano',
    },
    {
      school: 'Kano university of science and technology (kust), wudil',
      location: 'Wudil',
      state: 'Kano',
    },
    {
      school: 'Federal College of Education',
      location: 'Katsina',
      state: 'Katsina',
    },
    {
      school: 'Hassan Usman Katsina Polytechnic',
      location: 'Katsina',
      state: 'Katsina',
    },
    {
      school: 'Federal University Dutsinma  ',
      email: 'wcffudma@gmail.com',
      location: 'Dutsima',
      state: 'Katsina',
    },
    {
      school: 'Federal College of Education, Okene',
      location: 'Okene',
      state: 'Kogi',
    },
    {
      school: 'Kogi State University, Ayingba',
      location: 'Ayingba',
      state: 'Kogi',
    },
    {
      school: 'Kogi State Polytechnic, Lokoja',
      location: 'Lokoja',
      state: 'Kogi',
    },
    {
      school: 'Federal Polytechnic Idah',
      location: 'Idah',
      state: 'Kogi',
    },
    {
      school: 'Federal University Lokoja',
      email: 'wcffulchapter@gmail.com',
      location: 'Lokoja',
      state: 'Kogi',
    },
    {
      school: 'Federal University Lafia',
      location: 'Lafia',
      state: 'Nasarawa',
    },
    {
      school: 'Nasarawa State University Keffi, ',
      location: 'Keffi',
      state: 'Nasarawa',
    },
    {
      school: 'Nasarawa State Polytechnic Lafia ',
      location: 'Lafia',
      state: 'Nasarawa',
    },
    {
      school: 'Federal Polytechnic Nasarawa ',
      location: 'Nasarawa',
      state: 'Nasarawa',
    },
    {
      school: 'College of Agriculture Lafia ',
      location: 'Lafia',
      state: 'Nasarawa',
    },
    {
      school: 'Fed. College of Education',
      location: 'Kontagora',
      state: 'Niger',
    },
    {
      school: 'Federal College of Education. Pankshin',
      location: 'Pankshin',
      state: 'Plateau',
    },
    {
      school: 'School of Health Zawan, jos',
      location: 'Zawan',
      state: 'Plateau',
    },
    {
      school: 'University of Jos ',
      location: 'Jos',
      state: 'Plateau',
    },
    {
      school: 'Plateau State University',
      location: 'Jos',
      state: 'Plateau',
    },
    {
      school: 'Federal University Wukari',
      location: 'Wukari',
      state: 'Taraba',
    },
    {
      school: 'Taraba State University Taraba',
      email: 'winnerscampusfellowshiptsu@gmail.com',
      location: 'Taraba',
      state: 'Taraba',
    },
    {
      school: 'College of Health Technology, Taraba',
      location: 'Taraba',
      state: 'Taraba',
    },
    {
      school: 'College of Agriculture Taraba',
      location: 'Taraba',
      state: 'Taraba',
    },
    {
      school: 'Federal University, Geshua ',
      location: 'Geshua',
      state: 'Yobe',
    },
  ];

  constructor() {}

  public getCampuses(limit: number, offset: number) {
    return of(this.campuses.slice(offset, offset + limit));
  }
}
