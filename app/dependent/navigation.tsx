import {useLinkTo, useRoute} from '@react-navigation/native';

let linkTo: any = null;

export const setNavigationObject = () => {
  linkTo = useLinkTo();
};

export const push = (path: string) => {
  linkTo(path);
};

export const getQueryParams = () => {
  const route = useRoute();
  return route.params;
};
