function showPopupCard(professorName) {
    const popupCard = document.getElementById('popup-card');
    const professorpositionSpan = document.getElementById('professor-pos');
    const professorNameSpan = document.getElementById('professor-name');
    const professorImage = document.querySelector('.popup-content img');
    const professorEmailSpan = document.getElementById('professor-email');
    const professorPhoneSpan = document.getElementById('professor-phone');
    const professordetailSpan = document.getElementById('professor-details');
    professorNameSpan.textContent = professorName;

    professorImage.src = '/images/profImages/' + professorName + '.jpg';
  /*****************************************SEMESTER I******************************************************** */
    if(professorName=='Dr. Vishal Deshpande'){
      const professorDetailsLink = 'https://www.iitp.ac.in/index.php/people-10/ph-d-students/2-uncategorised/360-view-profile-104'
      professorpositionSpan.textContent= 'Asst. Professor';
      professorEmailSpan.textContent = 'deshpande@iitp.ac.in';
      professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
      professorPhoneSpan.textContent= '+91-612-302 8706 (Office)';
    }
    else if(professorName=='Dr. Rajib Kumar Jha'){
      const professorDetailsLink = 'https://www.iitp.ac.in/index.php/2-uncategorised/195-view-profile-9'
      professorpositionSpan.textContent= 'Associate Professor';
      professorEmailSpan.textContent = 'jharajib@iitp.ac.in';
      professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
      professorPhoneSpan.textContent= '+91-612-302 8010';
    }
    else if(professorName=='Dr. Shweta Sinha'){
      const professorDetailsLink = 'https://www.iitp.ac.in/index.php/peop-dept-menu/faculty/2-uncategorised/296-view-profile-93'
      professorpositionSpan.textContent= 'Coordinator- Centre for Endangered Language Studies (CELS, IIT Patna)';
      professorEmailSpan.textContent = 'sweta@iitp.ac.in';
      professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
      professorPhoneSpan.textContent= '+91-612 -302 8397';
    }
    else if(professorName=='Dr. Amit Kumar Verma'){
      const professorDetailsLink = 'https://www.iitp.ac.in/index.php/people-dept-menu/faculty/2-uncategorised/262-view-profile-59'
      professorpositionSpan.textContent= 'Associate Professor';
      professorEmailSpan.textContent = 'akverma@iitp.ac.in';
      professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
      professorPhoneSpan.textContent= '+91-6115-233 396';
    }
    else if(professorName=='Dr. Jobin Jose'){
      const professorDetailsLink = 'https://www.iitp.ac.in/index.php/the-institute/reports/impulse/2-uncategorised/273-view-profile-70'
      professorpositionSpan.textContent= 'Associate Professor';
      professorEmailSpan.textContent = 'jobin.jose@iitp.ac.in';
      professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
      professorPhoneSpan.textContent= '+91-6115 XXX';
    }
    else if(professorName=='Mr. Santosh Kumar'){
      const professorDetailsLink = 'https://www.iitp.ac.in/index.php/people-phy-menu/staff'
      professorpositionSpan.textContent= 'Sr. Tech. Supt.';
      professorEmailSpan.textContent = 'santosh@iitp.ac.in';
      professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
      professorPhoneSpan.textContent= '06115-233 XXX ';
    }
/*****************************************SEMESTER II******************************************************** */
else if(professorName=='Dr. Anoop Kumar Gupta'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/people-12/faculty/2-uncategorised/304-view-profile-101'
  professorpositionSpan.textContent= 'Assistant Professor (Grade-1)';
  professorEmailSpan.textContent = 'anoopg@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-6115-233762';
}   
else if(professorName=='Dr. Subrata Hait'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/people-10/cee-faculty/2-uncategorised/271-view-profile-68'
  professorpositionSpan.textContent= 'Associate Professor';
  professorEmailSpan.textContent = 'shait@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-6115-233195';
}
else if(professorName=='Dr. Neeladri Das'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/che-dept-menu/faculty/2-uncategorised/243-view-profile-40'
  professorpositionSpan.textContent= 'Associate Professor';
  professorEmailSpan.textContent = 'neeladri@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-6115-233023';
}
else if(professorName=='Dr. Debabrata Seth'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/che-dept-menu/faculty/2-uncategorised/225-view-profile-35'
  professorpositionSpan.textContent= 'Associate Professor';
  professorEmailSpan.textContent = 'debabrata@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-6115-233 028';
}
else if(professorName=='Dr. Sourav Kumar Dandapat'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/people/faculty/2-uncategorised/217-view-profile-28'
  professorpositionSpan.textContent= 'Assistant Professor';
  professorEmailSpan.textContent = 'sourav@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-612-302 8345';
}
else if(professorName=='Prof. Preetam Kumar'){
  const professorDetailsLink = 'https://www.iitp.ac.in/~pkumar/'
  professorpositionSpan.textContent= 'Professor';
  professorEmailSpan.textContent = 'pkumar@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-6115-233 048';
}
else if(professorName=='Dr. Shailesh Kumar Tiwari'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/people-dept-menu/faculty/2-uncategorised/467-view-profile-111'
  professorpositionSpan.textContent= 'Assistant Professor';
  professorEmailSpan.textContent = 'sktiwari@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-612-302 8074';
}    
else if(professorName=='Dr. Chiranjit Sarkar'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/people-6/faculty/2-uncategorised/249-view-profile-46'
  professorpositionSpan.textContent= 'Associate Professor';
  professorEmailSpan.textContent = 'csarkar@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '06115-233-394';
}
/*****************************************SEMESTER III EEE******************************************************** */
else if(professorName=='Dr. Pramod Kumar Tiwari'){
  const professorDetailsLink = 'https://www.iitp.ac.in/~pktiwari/'
  professorpositionSpan.textContent= 'Associate Professor';
  professorEmailSpan.textContent = 'pktiwari@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-612-302 8351';
}
else if(professorName=='Dr. Saurabh Kumar Pandey'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/2-uncategorised/202-view-profile-15'
  professorpositionSpan.textContent= 'Associate Professor';
  professorEmailSpan.textContent = 'saurabh@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-6115-233 246';
}
else if(professorName=='Dr. Amit Kumar Singh'){
  const professorDetailsLink = 'https://sites.google.com/view/metaantennalab/home'
  professorpositionSpan.textContent= 'Assistant Professor';
  professorEmailSpan.textContent = 'amitks@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-6115-233 XXX';
}
else if(professorName=='Dr. Pratibhamoy Das'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/people-dept-menu/faculty/2-uncategorised/263-view-profile-60'
  professorpositionSpan.textContent= 'Assistant Professor';
  professorEmailSpan.textContent = ' pratibhamoy@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-612-302 8055';
}
/*****************************************HSS****************************************************** */
else if(professorName=='Prof. Nalin Bharti'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/peop-dept-menu/faculty/2-uncategorised/290-view-profile-87'
  professorpositionSpan.textContent= 'Professor';
  professorEmailSpan.textContent = ' nalinbharti@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-612-302 8017';
}
else if(professorName=='Dr. Aditya Raj'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/peop-dept-menu/faculty/2-uncategorised/289-view-profile-86'
  professorpositionSpan.textContent= 'Associate Professor';
  professorEmailSpan.textContent = ' aditya.raj@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-612-255 2095';
}
else if(professorName=='Dr. Sweta Sinha'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/peop-dept-menu/faculty/2-uncategorised/296-view-profile-93'
  professorpositionSpan.textContent= 'Associate Professor of Linguistics (Department of Humanities and Social Sciences)';
  professorEmailSpan.textContent = ' sweta@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-612-302 8397';
}
/*****************************************SEM 4 EEE********************************************************** */
else if(professorName=='Dr. Somanath Pradhan'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/2-uncategorised/1435-dr-somanath-pradhan'
  professorpositionSpan.textContent= 'Assistant Professor';
  professorEmailSpan.textContent = ' pradhans@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91-612-302 8969';
}
else if(professorName=='Dr. Sanjoy Kumar Parida'){
  const professorDetailsLink = 'https://www.iitp.ac.in/index.php/2-uncategorised/203-view-profile-16'
  professorpositionSpan.textContent= 'Associate Professor';
  professorEmailSpan.textContent = ' skparida@iitp.ac.in';
  professordetailSpan.innerHTML = '<a href="' + professorDetailsLink + '">Visit</a>';
  professorPhoneSpan.textContent= '+91 6115 233 040';
}
    popupCard.style.display = 'block';
  }

  function hidePopupCard() {
    const popupCard = document.getElementById('popup-card');
    popupCard.style.display = 'none';
  }

  const closeButtons = document.querySelectorAll('.close-button');
  closeButtons.forEach(button => {
    button.addEventListener('click', hidePopupCard);
  });