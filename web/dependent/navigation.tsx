import { useRouter,NextRouter } from 'next/router';

let navigationObject: NextRouter| null = null;

export const setNavigationObject = () => {
  navigationObject = useRouter();
};

export const push = (path: string) => {
  navigationObject.push(path);
};

export const getQueryParams = () => {
  return navigationObject.query;
}
