<script lang="ts">
  import { session } from "$app/stores";
  import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
  import { toast } from "@zerodevx/svelte-toast";
  import Fa from "svelte-fa";
  import type { Model_Type, TrainingParam } from "../../../utils/schema";
  import Loading from "@comp/others/Loading.svelte";
  import { GoogleSpin } from "svelte-loading-spinners";
  import { fade } from "svelte/transition";
  import { post_data } from "../../../shared/api";
  import { baseApi } from "../../../utils/constants";
import { goto } from "$app/navigation";
  let data: TrainingParam = {
    node: 15,
    size: 0.3,
    rate: 0.01,
    epoch: 100,
  };
  let fake_size = 30;
  const slider_change = () => {
    data.size = fake_size / 100;
  };
  let loading: boolean = false;
  export let values = false;
  async function submitForm() {
    loading = true;
    const response = await post_data(
      `${baseApi}/model/training/?node=${data.node}&size=${data.size}&rate=${data.rate}&ep=${data.epoch}`,
      $session.user.auth_token,
      ""
    );
    const res = await response.json();
    if (res.status_code == 200) {
        return goto(`data/id/${res.detail}`)
    }
    values != false;
    loading = false;
    return toast.push(`Something went wrong`);
  }
</script>

<input
  bind:value={values}
  bind:checked={values}
  type="checkbox"
  id="modal-add"
  class="modal-toggle"
/>
<div class="modal">
  <div class="modal-box w-11/12 max-w-2xl">
    {#if loading}
      <div
        class="flex flex-col h-full w-full justify-center items-center"
        in:fade
      >
        <GoogleSpin size="450px" duration="3s" />
        <!-- <Loading/> -->
        <span class="font-inter font-blod text-[50px]">loading ...</span>
      </div>
    {:else}
      <div class="" in:fade>
        <h3 class="py-3 text-lg font-bold font-inter">Create Training Model</h3>
        <label class="input-group w-full mb-5">
          <div class="w-96 flex flex-row justify-between bg-base-300">
            <span>Nodes</span>
            <div class="tooltip mx-3 mt-4" data-tip="Number of nodes on layer">
              <Fa icon={faInfoCircle} />
            </div>
          </div>
          <input
            type="number"
            step="1"
            class="input input-bordered w-full text-right font-inter font-bold"
            bind:value={data.node}
            required
          />
        </label>
        <label class="input-group w-full h-12 mb-5 bg-base-300 rounded-lg">
          <div class="w-[470px] flex flex-row justify-between bg-base-300">
            <span>Test Size </span>
            <div
              class="tooltip mx-3 mt-4 z-10"
              data-tip="Test size and training size ratio"
            >
              <Fa icon={faInfoCircle} />
            </div>
          </div>
          <input
            type="range"
            min="1"
            max="100"
            bind:value={fake_size}
            on:change={slider_change}
            class="range h-12 rounded-none range-primary"
          />
          <input
            class="input input-bordered w-20 font-inter font-bold"
            value={`${fake_size}%`}
            disabled
          />
        </label>
        <label class="input-group w-full mb-5">
          <div class="w-96 flex flex-row justify-between bg-base-300">
            <span>Learning Rate</span>
            <div
              class="tooltip mx-3 mt-4"
              data-tip="Learning rate to control weights for loss"
            >
              <Fa icon={faInfoCircle} />
            </div>
          </div>
          <input
            type="number"
            step="0.01"
            class="input input-bordered w-full text-right font-inter font-bold"
            bind:value={data.rate}
            required
          />
        </label>
        <label class="input-group w-full mb-5">
          <div class="w-96 flex flex-row justify-between bg-base-300">
            <span>Epoch</span>
            <div
              class="tooltip mx-3 mt-4"
              data-tip="Number of epochs or complete passes of the entire training dataset passing through the training or learning process of the algorithm"
            >
              <Fa icon={faInfoCircle} />
            </div>
          </div>
          <input
            type="number"
            step="10"
            class="input input-bordered w-full text-right font-inter font-bold"
            bind:value={data.epoch}
            required
          />
        </label>
        <p class="py-1 font-inter">
          This model will be <b class="text-primary">deleted</b>!
        </p>
        <button class="btn btn-success float-right" on:click={submitForm}
          >Confirm</button
        >
        <label for="modal-add" class="btn float-right mr-5">Cancel </label>
      </div>
    {/if}
  </div>
</div>
