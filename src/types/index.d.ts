type Rate = {
  index?: number;
  label: string;
  rate: number;
  regionalRate: number;
};

type WithExceptions<T> = T & {
  exceptions?: Rate[];
};
