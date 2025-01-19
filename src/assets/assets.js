import logo_img from './Logo.svg';
import profile_img from './profile.svg';
import hamburger_img from './hamburger.svg';
import cross_img from './cross.svg';
import delete_icon from './delete_icon.svg';
import edit_icon from './edit_icon.svg';
import email_icon from './email_icon.svg';
import facebook_icon from './facebook_icon.svg';
import instagram_icon from './instagram_icon.svg';
import left_arrow_icon from './left_arrow_icon.svg';
import right_arrow_icon from './right_arrow_icon.svg';
import location_icon from './location_icon.svg';
import lock_icon from './lock_icon.svg';
import money_icon from './money_icon.svg';
import search_icon from './search_icon.svg';
import home_icon from './home_icon.svg';
import add_icon from './add_icon.svg';
import back_arrow_icon from './back_arrow_icon.svg';
import cross_icon from './cross_icon.svg';
import upload_icon from './upload_area.svg';
import profile_upload_icon from './profile_upload_icon.svg';
import person_tick_icon from './person_tick_icon.svg';
import person_icon from './person_icon.svg';
import phone_icon from './phone_icon.svg';
import seller_icon from './seller_user_icon.svg';
import password_show_icon from './eye-password-show.svg';
import password_hide_icon from './eye-password-hide.svg';
import hero_img from './HeroImage.png';
import bulldog_img from './Bulldog_inglese.jpg';
import user_icon from './group_add.svg';
import user_home_icon from './home_work.svg';
import content_paste_search_icon from './content_paste_search.svg';
import left from './Left.svg';
import right from './Right.svg';
import paws from './paws.svg';
import dog1 from './dog1.svg';
import dog2 from './dog2.svg';
import cat1 from './cat1.svg';
import cat2 from './cat2.svg';
import petAdoption from './Pet_adoption.svg';

export const images = {
  petAdoption,
  paws,
  dog1,
  dog2,
  cat1,
  cat2,
  left,
  right,
  password_hide_icon,
  content_paste_search_icon,
  user_home_icon,
  user_icon,
  password_show_icon,
  logo_img,
  profile_img,
  hamburger_img,
  cross_img,
  delete_icon,
  edit_icon,
  person_tick_icon,
  profile_upload_icon,
  upload_icon,
  cross_icon,
  back_arrow_icon,
  add_icon,
  home_icon,
  search_icon,
  money_icon,
  lock_icon,
  location_icon,
  right_arrow_icon,
  left_arrow_icon,
  instagram_icon,
  facebook_icon,
  email_icon,
  person_icon,
  phone_icon,
  seller_icon,
  hero_img,
  bulldog_img,
};

export const stepsDetail = [
  {
    id: 1,
    icon: user_icon,
    detail: 'Set up your profile (including photos) in minutes',
  },
  {
    id: 2,
    icon: user_home_icon,
    detail:
      'Describe your home and routine so we can see if it’s right for pet',
  },
  {
    id: 3,
    icon: content_paste_search_icon,
    detail: 'Start your search!',
  },
];

export const animalHumanRel = [
  {
    title: 'Emotional relationship',
    text: "The emotional bond between cats and humans is deeply rooted in felines' unconditional love and companionship.",
    image: images.cat1,
  },
  {
    title: 'Communication',
    text: 'Animals can communicate better with people in such conditions, as verbal communication is replaced by non-verbal.',
    image: images.dog1,
  },
  {
    title: 'Children and pets',
    text: 'Pets establish emotional attachments to children, and the relationship turns out positive in terms of affective aspects, in reinforcement of the child´s personality.',
    image: images.dog2,
  },
  {
    title: 'Health',
    text: 'Some studies suggest that owning a pet can lower blood pressure and improve heart health.',
    image: images.cat2,
  },
];
