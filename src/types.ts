// Filters types
export type TranslatebleItemType = {
  translate: string;
  locale: string;
};

export type FilterType = {
  id: number;
  translatable_items: Array<TranslatebleItemType>;
  slug: string;
};

export type SpeakerType = {
  image: string | null;
  surname: string;
  position: string;
  text: string;
};

export type CategoryType = {
  result: Array<FilterType | SpeakerType>;
  labels: Record<string, string>;
};

// Record types
export type PageType = {
  id: Number;
  meta: {
    type: string;
    detail_url: string;
    html_url: string | null;
    slug: string;
    first_published_at: string;
    locale: string;
  };
  title: string;
};

export type EventType = {
  id: number;
  title: string;
  date_time: string | null;
  speakers: Array<SpeakerType>;
  formats: Array<FilterType>;
  languages: Array<FilterType>;
  places: Array<FilterType>;
  categories: Array<FilterType>;
  technologies: Array<FilterType>;
};

export type MainData = {
  id: number;
  meta: any;
  title: string;
  header_menu: any;
  footer: any;
  hero_title: string;
  hero_button_link: string;
  hero_button_text: string;
  hero_description: string;
  content_blocks: any;
}

export type CategoryData = {
  id: number;
  translatable_items: Array<{
    translate: string;
    locale: string;
  }>;
  slug: string;
};

export type MainProps = {
  filters: Record<string, any>;
  data: Array<EventType>;
  main: MainData;
};


