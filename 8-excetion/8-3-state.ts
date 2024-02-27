{
  class TimeoutError extends Error {}
  class OfflineError extends Error {}

  type SuccessState = {
    result: 'success';
  };
  type NetworkErrorState = {
    result: 'fail';
    reason: 'offline' | 'down' | 'timeout';
  };
  type ResultState = SuccessState | NetworkErrorState;

  class NetworkClient {
    tryConnect(): ResultState {}
  }

  class UseerService {
    constructor(private client: NetworkClient) {}

    login() {
      this.client.tryConnect();
    }
  }

  class App {
    constructor(private userService: UseerService) {}
    run() {
      try {
        // 에러 처리를 추가함으로써 앱이 죽지 않음
        this.userService.login();
      } catch (error) {
        // show dialog to user
        // 의미있는 에러처리를 할 수 있는 곳은 App에서이므로 해당 클래스에서 try/catch문을 통해 에러 검사를 하는 것이 좋음
        // catch()에는 어떠한 타입 정보도 전달되지 않아 instanceof를 사용할 수 없음
        // if (error instanceof OfflineError) {
        // }
      }
    }
  }

  const client = new NetworkClient();
  const service = new UseerService(client);
  const app = new App(service);

  app.run();
}
