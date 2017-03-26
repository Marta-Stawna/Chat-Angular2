import { TestBed, inject } from '@angular/core/testing';

import { ChatRoomListService } from './chat-room.service';

describe('ChatRoomListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ChatRoomListService]
    });
  });

  it('should ...', inject([ChatRoomListService], (service: ChatRoomListService) => {
    expect(service).toBeTruthy();
  }));
});
