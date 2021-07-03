export default interface Launch {
  mission_name: string;
  launch_date_local: string;
  launch_site: {
    site_name_long: string;
  };
  links: {
    article_link: string;
    flickr_images: Array<string>;
  };
  rocket: {
    rocket_name: string;
  };
}
