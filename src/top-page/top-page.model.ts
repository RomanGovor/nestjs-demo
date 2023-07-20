export enum TopLevelCategory {
  Courses,
  Services,
  Books,
  Products,
}

export interface IHh {
  count: number;
  juniorSalary: number;
  middleSalary: number;
  seniorSalary: number;
}

export class TopPageModel {
  _id: string;
  firstCategory: TopLevelCategory;
  secondCategory: string;
  title: string;
  hh?: IHh;
  advantages: Array<{
    title: string;
    description: string;
  }>;
  seoText: string;
  tagsTitle: string;
  tags: string[];
}
