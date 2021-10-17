export type RootStackParamList = {
  Root: undefined;
  NewSnip: undefined;
  NotFound: undefined;
  Replies: undefined;
  ViewProfile: undefined;
  FollowersFollowing: undefined;
};

export type BottomTabParamList = {
  Queue: undefined;
  Explore: undefined;
  Create: undefined;
  Notifications: undefined;
  Profile: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type TabThreeParamList = {
  TabThreeScreen: undefined;
};

export type TabFourParamList = {
  TabFourScreen: undefined;
};

export type TabFiveParamList = {
  TabFiveScreen: undefined;
};

export type UserType = {

  id: string;
  name?: string;
  profileImage?: string;

  user: UserType;
  audio: string;
  createdAt: string;



}

export type SnipletType = {

  id: string;
  user: UserType;
  audio: string;
  createdAt: string;
  title?: string;
  image?: string;
  numberOfLoops?: number;
  numberOfReplies?: number;




}