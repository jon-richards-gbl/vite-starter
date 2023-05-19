import { mockApiService } from "../../../test/helpers/axios";
import { createTestStore } from "../../../test/helpers/store";
import { fetchAvatar } from "./actions";
import { setName } from "./userSlice";

describe("userSlice", () => {
  describe("fetchAvatar", () => {
    const mockResponseAvatar = `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <circle data-testid="test-svg" cx="50" cy="50" r="50" />
</svg>`;

    it("gets an avg icon from the avatar api and adds it to the store", async () => {
      mockApiService()
        .onGet("https://api.dicebear.com/6.x/fun-emoji/svg")
        .reply(200, mockResponseAvatar);
      const store = createTestStore();

      store.dispatch(setName("test name"));

      await store.dispatch(fetchAvatar());

      const updatedState = store.getState();

      expect(updatedState.user).toEqual({
        name: "test name",
        avatarSvg: mockResponseAvatar,
        isLoading: false,
      });
    });
  });
});
