{
  type Video = {
    title: string;
    author: string;
    description: string;
  };

  // [1,2].map(item => item * item); // [1, 4]

  // Optional이라는 타입은 기존의 T오브젝트 타입의 모든 키들을 돌면서 그 키에 해당 하는 밸류의 타입을 재정의한 것
  // 그것에 옵셔널 기호를 추가하면 T와 같은 타입이지만 옵셔널 처리가 된 타입ㅇ로 만들 수 있음
  type Optional<T> = {
    [P in keyof T]?: T[P]; // for...in // 키를 순회
  };

  type ReadOnly<T> = {
    readonly [P in keyof T]: T[P];
  };

  type VideoOptional = Optional<Video>;
  const videoOp: VideoOptional = { title: 'hello', author: 'singyo' };

  type Animal = {
    name: string;
    age: number;
  };
  const animal: Optional<Animal> = { name: 'Dog' };
  animal.name = 'Cat';

  const video: ReadOnly<Video> = {
    title: 'hello',
    author: 'ellie',
    description: 'lol',
  };
  // video.author = 'singyo'; // error

  // 옵셔널일 경우, readonly일 경우 다시 타입을 만드는 것은 비효율적
  // type VideoOptional = {
  //   title?: string;
  //   author?: string;
  //   description?: string;
  // };
  // type VideoReadOnaly = {
  //   readonly title: string;
  //   readonly author: string;
  //   readonly description: string;
  // };

  // T타입의 키를 돌면서 기존의 밸류타입을 쓰거나 null이 가능한 타입
  type Nullable<T> = { [P in keyof T]: T[P] | null };
  const obj2: Nullable<Video> = {
    title: null,
    author: null,
    description: null,
  };

  //
  // 타입스크립트 예제
  type Proxy<T> = {
    get(): T;
    set(vlaue: T): void;
  };

  type Proxify<T> = {
    [P in keyof T]: Proxy<T[P]>;
  };

  type ProxyWrapperFn = <T>(value: T) => Proxy<T>;

  const wrappedProxy: ProxyWrapperFn = (value) => {
    let _value = value;
    return {
      get: () => _value,
      set: (value) => {
        _value = value;
      },
    };
  };

  const videoProxy: Proxify<Video> = {
    title: wrappedProxy('영상 제목'),
    author: wrappedProxy('영상 제작자'),
    description: wrappedProxy('영상 설명'),
  };

  console.log(videoProxy.title.get()); // 영상 제목
  console.log(videoProxy.author.get()); // 영상 제작자
  console.log(videoProxy.description.get()); // 영상 설명
  videoProxy.description.set('영상 설명 수정');
  console.log(videoProxy.description.get()); // 영상 설명 수정
}
