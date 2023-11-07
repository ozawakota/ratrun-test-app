<template>
  <main class="main">
    <div class="c-inner">
      <div class="top-page">
        <BasicLoading v-show="isLoading" />
        <div class="top-page-inner">
          <div class="top-fv">
            <h1 class="top-fv-title">フリーランススタート</h1>
            <div class="top-fv-info">
              <span>案件・求人数</span>
              <span>656,720</span>
              <span>件(11/07更新)</span>
            </div>
            <p class="top-fv-text">
              フリーランスエンジニア専用のIT求人・案件検索サイトで仕事探し
            </p>
          </div>
          <!-- ▼ top-job-search -->
          <div class="top-job-search">
            <h2>フリーワードで案件検索</h2>
            <form action="" class="top_form">
              <div class="top_form_inner">
                <fieldset class="top_form_fieldset">
                  <span class="icon">
                    <font-awesome-icon :icon="['fas', 'magnifying-glass']" style="color: #dedede;" />
                  </span>
                  <input type="text" name="keyword" placeholder="キーワード入れて探す">
                </fieldset>
                <div class="top_form_btn">
                  <button type="button">
                    <span>案件を検索</span>
                  </button>
                </div>
              </div>
            </form>
          </div>
          <!-- ▲ top-job-search -->
          <section class="sec">
            <h2 class="sec-title">
              リモート・在宅のフリーランス求人・案件
            </h2>
          </section>
          <section class="sec">
            <h2 class="sec-title">
              新着フリーランス求人・案件
            </h2>
          </section>

        </div>
        <ul>
          <li>
            <a href="">testtest</a>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { BasicLoading } from "@/components/atoms/Loading/";
import { ref } from "vue";
import type { Ref } from "vue";
import { getMatters } from "@/api/matters";
import { Matters } from "@/types/matter";

const isLoading = ref(false);
const matters: Ref<Matters[]> = ref([]);

(async () => {
  try {
    isLoading.value = true;
    matters.value = await getMatters();
  } catch {
    alert("error");
  } finally {
    isLoading.value = false;
  }
})();
</script>
<style lang="scss" scoped>
.top {
  &-page {
    @include mobile {
      color: blue;
    }
    &-inner{
      max-width: 980px;
      margin-inline: auto;
    }
    .top-fv-title{
      text-align: center;
      font-size: 28px;
      font-style: italic;
      @include tablet {
        font-size: 42px;
        font-weight: 900;
      }
    }
    .top-fv-info{
      margin-block: 10px;
      text-align: center;
      span{
        font-weight: bold;
        letter-spacing: 0.03em;
        &:nth-child(2){
          color:#F86986;
          font-size: 25px;
          margin-inline: 5px;
        }
      }
    }
    .top-fv-text{
      letter-spacing: 0.08em;
      margin-block-start: 1.5rem;
      text-align: center;
      font-size: 18px;
      font-weight: 700;
    }
    .top-job-search{
      margin-block-start: 5.5rem;

      h2{
        font-size: 24px;
        font-weight: 700;

      }
      .top_form{
        margin-block: 20px 50px;
        &_inner{
          display: flex;
          align-items: center;
        }
        &_fieldset{
          width:min(100%, 750px);
          margin-inline-end: 10px;
          position: relative;
          .icon{
            display: inline-block;
            width: 20px;
            height: 20px;
            position: absolute;
            top:50%;
            left:20px;
            transform: translateY(-50%);
          }
          input{
            height: 64px;
            border-radius:32px ;
            padding-inline-start: 50px;
            width:100%;
            background-color: #F9FAFA;
          }
        }
        &_btn{
          button{
            height: 64px;
            border-radius:32px ;
            padding: 0.5rem 2rem;
            background-color:#2E9A9E;
            color: #fff;
            font-size: 16px;
            font-weight: 700;
          }
        }
      }
    }
  }
}
</style>
