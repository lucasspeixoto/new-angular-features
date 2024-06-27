import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-card-skeleton',
  standalone: true,
  template: `
    <div
      class="m-4 bg-white border-gray-200 rounded-lg w-1/4 p-3 sm:h-40 shadow-lg flex flex-col select-none "
    >
      <div class="flex flex-col flex-1 gap-5">
        <div class="flex flex-1 flex-col gap-3 w-3/4 my-2 ml-4">
          <div class="bg-gray-200 w-full animate-pulse h-3 rounded-xl"></div>
          <div class="bg-gray-200 w-full animate-pulse h-3 rounded-xl"></div>
          <div class="bg-gray-200 w-full animate-pulse h-3 rounded-xl"></div>
        </div>
        <div class="flex justify-end">
          <div class="bg-gray-200 mx-2 w-20 h-10 animate-pulse rounded-md"></div>
          <div class="bg-gray-200 mx-2 w-20 h-10 animate-pulse rounded-md"></div>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardSkeletonComponent {}
