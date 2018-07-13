import { createLocalVue, shallowMount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import VueRouter from "vue-router";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);
    const msg = "new message";
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg },
      localVue
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
