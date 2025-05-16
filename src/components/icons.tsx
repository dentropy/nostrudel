import { createIcon, IconProps } from "@chakra-ui/icons";

import SearchMd from "./icons/search-md";
import Settings02 from "./icons/settings-02";
import Mail01 from "./icons/mail-01";
import StickerSquare from "./icons/sticker-square";
import Code01 from "./icons/code-01";
import DistributeSpacingVertical from "./icons/distribute-spacing-vertical";
import Grid01 from "./icons/grid-01";
import Microscope from "./icons/microscope";
import ChevronDown from "./icons/chevron-down";
import ChevronUp from "./icons/chevron-up";
import ChevronLeft from "./icons/chevron-left";
import ChevronRight from "./icons/chevron-right";
import Zap from "./icons/zap";
import Target04 from "./icons/target-04";
import Award01 from "./icons/award-01";
import LayoutRight from "./icons/layout-right";
import ThumbsUp from "./icons/thumbs-up";
import ThumbsDown from "./icons/thumbs-down";
import LogOut01 from "./icons/log-out-01";
import Tool02 from "./icons/tool-02";
import ImagePlus from "./icons/image-plus";
import LockUnlocked01 from "./icons/lock-unlocked-01";
import PencilLine from "./icons/pencil-line";
import Share07 from "./icons/share-07";
import Copy01 from "./icons/copy-01";
import Trash01 from "./icons/trash-01";
import Share04 from "./icons/share-04";
import FaceSmile from "./icons/face-smile";
import Eye from "./icons/eye";
import EyeOff from "./icons/eye-off";
import Colors from "./icons/colors";
import Database01 from "./icons/database-01";
import Speedometer03 from "./icons/speedometer-03";
import UserCircle from "./icons/user-circle";
import DotsHorizontal from "./icons/dots-horizontal";
import Feather from "./icons/feather";
import List from "./icons/list";
import VideoRecorder from "./icons/video-recorder";
import Map01 from "./icons/map-01";
import PlayCircle from "./icons/play-circle";
import StopCircle from "./icons/stop-circle";
import CheckVerified01 from "./icons/check-verified-01";
import AlertOctagon from "./icons/alert-octagon";
import AlertTriangle from "./icons/alert-triangle";
import Key01 from "./icons/key-01";
import Check from "./icons/check";
import Bell01 from "./icons/bell-01";
import QrCode02 from "./icons/qr-code-02";
import PlusCircle from "./icons/plus-circle";
import AtSign from "./icons/at-sign";
import UserPlus01 from "./icons/user-plus-01";
import UserX01 from "./icons/user-x-01";
import Plus from "./icons/plus";
import Bookmark from "./icons/bookmark";
import BankNote01 from "./icons/bank-note-01";
import Wallet02 from "./icons/wallet-02";
import Download01 from "./icons/download-01";
import Repeat01 from "./icons/repeat-01";
import ReverseLeft from "./icons/reverse-left";
import Pin01 from "./icons/pin-01";
import Translate01 from "./icons/translate-01";
import MessageChatSquare from "./icons/message-chat-square";
import Package from "./icons/package";
import Magnet from "./icons/magnet";
import Recording02 from "./icons/recording-02";
import Upload01 from "./icons/upload-01";
import Modem02 from "./icons/modem-02";
import BookOpen01 from "./icons/book-open-01";
import Edit04 from "./icons/edit-04";
import Film02 from "./icons/film-02";
import Camera01 from "./icons/camera-01";

const defaultProps: IconProps = { boxSize: 4 };

export const NotesIcon = StickerSquare;

export const NoteFeedIcon = DistributeSpacingVertical;

export const MoreIcon = DotsHorizontal;

export const CodeIcon = Code01;

export const SettingsIcon = Settings02;
export const LogoutIcon = LogOut01;
export const ProfileIcon = UserCircle;

export const CopyToClipboardIcon = Copy01;

export const TrashIcon = Trash01;

export const AddIcon = Plus;

export const ChevronDownIcon = ChevronDown;
export const ChevronUpIcon = ChevronUp;
export const ChevronLeftIcon = ChevronLeft;
export const ChevronRightIcon = ChevronRight;

export const LightningIcon = Zap;
export const RelayIcon = Modem02;
export const MediaServerIcon = Database01;
export const BroadcastEventIcon = Share07;
export const ShareIcon = Share07;
export const PinIcon = Pin01;

export const ExternalLinkIcon = Share04;

export const SearchIcon = SearchMd;

export const ReplyIcon = ReverseLeft;
export const RepostIcon = Repeat01;
export const QuoteIcon = createIcon({
  displayName: "QuoteIcon",
  d: "M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z",
  defaultProps,
});

export const VerifiedIcon = CheckVerified01;
export const VerificationFailed = AlertOctagon;

export const VerificationMissing = createIcon({
  displayName: "VerificationFailed",
  d: "M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-7v2h2v-2h-2zm2-1.645A3.502 3.502 0 0 0 12 6.5a3.501 3.501 0 0 0-3.433 2.813l1.962.393A1.5 1.5 0 1 1 12 11.5a1 1 0 0 0-1 1V14h2v-.645z",
  defaultProps,
});

export const SpyIcon = createIcon({
  displayName: "SpyIcon",
  d: "M17 13a4 4 0 1 1-4 4h-2a4 4 0 1 1-.535-2h3.07A3.998 3.998 0 0 1 17 13zM7 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zM16 3a4 4 0 0 1 4 4v3h2v2H2v-2h2V7a4 4 0 0 1 4-4h8zm0 2H8c-1.054 0-2 .95-2 2v3h12V7c0-1.054-.95-2-2-2z",
  defaultProps,
});

export const AidIcon = createIcon({
  displayName: "AidIcon",
  d: `M 9.936 32.328 L 23.616 30.888 L 23.616 27.144 Q 23.616 22.586 21.704 20.521 A 5.08 5.08 0 0 0 21.6 20.412 A 6.382 6.382 0 0 0 18.933 18.818 Q 17.496 18.36 15.624 18.36 Q 14.191 18.36 12.378 18.487 A 72.855 72.855 0 0 0 11.232 18.576 Q 8.712 18.792 6.264 19.044 A 101.968 101.968 0 0 0 4.519 19.238 Q 3.658 19.342 2.895 19.451 A 54.307 54.307 0 0 0 2.016 19.584 L 1.8 17.208 Q 3.528 16.92 5.976 16.632 Q 8.424 16.344 10.98 16.128 Q 13.536 15.912 15.624 15.912 A 17.655 17.655 0 0 1 17.987 16.061 Q 20.088 16.345 21.6 17.172 Q 23.904 18.432 25.02 20.916 Q 26.136 23.4 26.136 27.144 L 26.136 47.88 A 2.391 2.391 0 0 0 27.241 49.742 A 3.711 3.711 0 0 0 27.972 50.112 Q 29.664 50.76 31.536 50.904 L 31.392 53.136 Q 30.6 53.136 29.772 53.064 A 10.502 10.502 0 0 1 28.708 52.918 A 8.869 8.869 0 0 1 28.224 52.812 Q 27.504 52.632 26.856 52.344 Q 25.992 51.984 25.272 51.408 Q 24.552 50.832 23.976 50.112 Q 22.887 50.558 21.407 51.037 A 64.591 64.591 0 0 1 19.98 51.48 A 47.191 47.191 0 0 1 16.263 52.421 A 54.852 54.852 0 0 1 14.832 52.704 Q 12.096 53.208 9.432 53.208 A 11.827 11.827 0 0 1 6.517 52.869 A 8.213 8.213 0 0 1 2.52 50.58 Q 0.495 48.468 0.097 44.658 A 18.924 18.924 0 0 1 0 42.696 Q 0 39.6 1.008 37.44 A 7.723 7.723 0 0 1 3.938 34.152 A 9.444 9.444 0 0 1 4.212 33.984 A 10.61 10.61 0 0 1 6.378 33.033 Q 7.945 32.531 9.936 32.328 Z M 74.952 16.776 L 74.952 0 L 77.472 0 L 77.472 52.56 L 74.952 52.56 L 74.952 49.536 A 14.179 14.179 0 0 1 73.965 50.115 Q 72.991 50.639 71.676 51.192 Q 69.624 52.056 67.248 52.632 Q 64.872 53.208 62.496 53.208 Q 61.128 53.208 59.508 52.992 Q 57.888 52.776 56.268 51.876 A 7.878 7.878 0 0 1 54.665 50.68 Q 53.943 49.992 53.28 49.068 Q 52.286 47.682 51.577 45.516 A 23.723 23.723 0 0 1 51.084 43.776 Q 50.256 40.392 50.256 35.136 A 48.271 48.271 0 0 1 50.443 30.76 Q 50.756 27.338 51.588 24.66 A 13.365 13.365 0 0 1 53.237 21.147 A 10.96 10.96 0 0 1 56.232 18.144 A 11.637 11.637 0 0 1 59.488 16.658 Q 61 16.215 62.818 16.035 A 26.734 26.734 0 0 1 65.448 15.912 A 45.058 45.058 0 0 1 68.555 16.022 A 49.596 49.596 0 0 1 69.012 16.056 Q 70.848 16.2 72.468 16.416 Q 73.708 16.581 74.506 16.705 A 38.407 38.407 0 0 1 74.952 16.776 Z M 74.952 47.16 L 74.952 19.08 Q 74.236 18.97 73.055 18.817 A 191.833 191.833 0 0 0 72.288 18.72 A 77.569 77.569 0 0 0 68.839 18.369 A 84.229 84.229 0 0 0 68.724 18.36 A 51.927 51.927 0 0 0 67.193 18.262 Q 66.492 18.227 65.861 18.219 A 30.504 30.504 0 0 0 65.448 18.216 A 21.169 21.169 0 0 0 62.523 18.405 Q 61.036 18.612 59.829 19.05 A 8.686 8.686 0 0 0 57.636 20.196 A 9.379 9.379 0 0 0 54.629 23.972 A 12.765 12.765 0 0 0 53.928 25.956 Q 53.145 28.894 52.97 32.812 A 52.279 52.279 0 0 0 52.92 35.136 A 54.259 54.259 0 0 0 53.008 38.331 Q 53.192 41.435 53.76 43.556 A 14.958 14.958 0 0 0 53.82 43.776 A 17.5 17.5 0 0 0 54.439 45.594 Q 54.804 46.491 55.236 47.198 A 7.034 7.034 0 0 0 56.196 48.456 A 8.681 8.681 0 0 0 57.498 49.563 A 6.238 6.238 0 0 0 59.328 50.436 A 12.628 12.628 0 0 0 61.244 50.827 A 10.415 10.415 0 0 0 62.496 50.904 Q 64.8 50.904 67.14 50.292 A 34.639 34.639 0 0 0 71.042 49.028 A 31.378 31.378 0 0 0 71.568 48.816 A 35.843 35.843 0 0 0 72.967 48.204 Q 74.122 47.667 74.952 47.16 Z M 40.392 52.56 L 37.872 52.56 L 37.872 16.56 L 40.392 16.56 L 40.392 52.56 Z M 23.616 47.952 L 23.616 33.192 L 10.224 34.56 Q 6.109 34.986 4.406 36.914 A 4.706 4.706 0 0 0 4.356 36.972 A 6.416 6.416 0 0 0 3.145 39.205 Q 2.664 40.7 2.664 42.696 Q 2.664 46.656 4.428 48.78 A 5.72 5.72 0 0 0 7.854 50.754 A 8.641 8.641 0 0 0 9.504 50.904 A 29.167 29.167 0 0 0 14.324 50.493 A 32.046 32.046 0 0 0 14.652 50.436 Q 17.28 49.968 19.656 49.284 A 55.277 55.277 0 0 0 21.327 48.776 Q 22.119 48.521 22.796 48.271 A 25.675 25.675 0 0 0 23.616 47.952 Z M 40.392 6.12 L 37.872 6.12 L 37.872 2.16 L 40.392 2.16 L 40.392 6.12 Z`,
  defaultProps,
});

export const KeyIcon = Key01;
export const CheckIcon = Check;

export const NotificationsIcon = Bell01;

export const LikeIcon = ThumbsUp;
export const DislikeIcon = ThumbsDown;

export const QrCodeIcon = QrCode02;

export const DirectMessagesIcon = Mail01;

export const UnlockIcon = LockUnlocked01;
export const UploadImageIcon = ImagePlus;

export const PlusCircleIcon = PlusCircle;

export const GithubIcon = createIcon({
  displayName: "GithubIcon",
  d: "M10 0a10 10 0 0 0-3.16 19.49c.5.1.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69a3.6 3.6 0 0 1 .1-2.64s.84-.27 2.75 1.02a9.58 9.58 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.4.1 2.64.64.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85l-.01 2.75c0 .26.18.58.69.48A10 10 0 0 0 10 0",
  defaultProps,
});

export const ToolsIcon = Tool02;

export const EditIcon = PencilLine;

export const WritingIcon = Feather;

export const AtIcon = AtSign;

export const FollowIcon = UserPlus01;
export const UnfollowIcon = UserX01;

export const ListsIcon = List;
export const LiveStreamIcon = VideoRecorder;

export const ImageGridTimelineIcon = Grid01;

export const TimelineHealthIcon = Microscope;

export const MapIcon = Map01;

export const StarEmptyIcon = createIcon({
  displayName: "StarEmptyIcon",
  d: "M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26ZM12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502L9.96214 9.69434L5.12921 10.2674L8.70231 13.5717L7.75383 18.3451L12.0006 15.968Z",
  defaultProps,
});
export const StarFullIcon = createIcon({
  displayName: "StarFullIcon",
  d: "M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z",
  defaultProps,
});
export const StarHalfIcon = createIcon({
  displayName: "StarHalfIcon",
  d: "M12.0006 15.968L16.2473 18.3451L15.2988 13.5717L18.8719 10.2674L14.039 9.69434L12.0006 5.27502V15.968ZM12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z",
  defaultProps,
});

export const ErrorIcon = AlertTriangle;

export const BookmarkIcon = Bookmark;

// TODO: switch to untitled UI solid icon
export const BookmarkedIcon = createIcon({
  displayName: "BookmarkedIcon",
  d: "M4 2H20C20.5523 2 21 2.44772 21 3V22.2763C21 22.5525 20.7761 22.7764 20.5 22.7764C20.4298 22.7764 20.3604 22.7615 20.2963 22.7329L12 19.0313L3.70373 22.7329C3.45155 22.8455 3.15591 22.7322 3.04339 22.4801C3.01478 22.4159 3 22.3465 3 22.2763V3C3 2.44772 3.44772 2 4 2ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z",
  defaultProps,
});

export const V4VStreamIcon = PlayCircle;
export const V4VStopIcon = StopCircle;

export const AddReactionIcon = createIcon({
  displayName: "AddReactionIcon",
  d: "M19.0001 13.9999V16.9999H22.0001V18.9999H18.9991L19.0001 21.9999H17.0001L16.9991 18.9999H14.0001V16.9999H17.0001V13.9999H19.0001ZM20.2426 4.75736C22.505 7.0244 22.5829 10.636 20.4795 12.992L19.06 11.574C20.3901 10.0499 20.3201 7.65987 18.827 6.1701C17.3244 4.67092 14.9076 4.60701 13.337 6.01688L12.0019 7.21524L10.6661 6.01781C9.09098 4.60597 6.67506 4.66808 5.17157 6.17157C3.68183 7.66131 3.60704 10.0473 4.97993 11.6232L13.412 20.069L11.9999 21.485L3.52138 12.993C1.41705 10.637 1.49571 7.01901 3.75736 4.75736C6.02157 2.49315 9.64519 2.41687 12.001 4.52853C14.35 2.42 17.98 2.49 20.2426 4.75736Z",
  defaultProps,
});

export const EmojiPacksIcon = FaceSmile;
export const GoalIcon = Target04;
export const BadgeIcon = Award01;

export const DrawerIcon = LayoutRight;

export const UnmuteIcon = Eye;
export const MuteIcon = EyeOff;

export const AppearanceIcon = Colors;
export const DatabaseIcon = Database01;
export const PerformanceIcon = Speedometer03;

/** @deprecated */
export const GhostIcon = createIcon({
  displayName: "GhostIcon",
  d: "M12 2C16.9706 2 21 6.02944 21 11V18.5C21 20.433 19.433 22 17.5 22C16.3001 22 15.2413 21.3962 14.6107 20.476C14.0976 21.3857 13.1205 22 12 22C10.8795 22 9.9024 21.3857 9.38728 20.4754C8.75869 21.3962 7.69985 22 6.5 22C4.63144 22 3.10487 20.5357 3.00518 18.692L3 18.5V11C3 6.02944 7.02944 2 12 2ZM12 4C8.21455 4 5.1309 7.00478 5.00406 10.7593L5 11L4.99927 18.4461L5.00226 18.584C5.04504 19.3751 5.70251 20 6.5 20C6.95179 20 7.36652 19.8007 7.64704 19.4648L7.73545 19.3478C8.57033 18.1248 10.3985 18.2016 11.1279 19.4904C11.3053 19.8038 11.6345 20 12 20C12.3651 20 12.6933 19.8044 12.8687 19.4934C13.5692 18.2516 15.2898 18.1317 16.1636 19.2151L16.2606 19.3455C16.5401 19.7534 16.9976 20 17.5 20C18.2797 20 18.9204 19.4051 18.9931 18.6445L19 18.5V11C19 7.13401 15.866 4 12 4ZM12 12C13.1046 12 14 13.1193 14 14.5C14 15.8807 13.1046 17 12 17C10.8954 17 10 15.8807 10 14.5C10 13.1193 10.8954 12 12 12ZM9.5 8C10.3284 8 11 8.67157 11 9.5C11 10.3284 10.3284 11 9.5 11C8.67157 11 8 10.3284 8 9.5C8 8.67157 8.67157 8 9.5 8ZM14.5 8C15.3284 8 16 8.67157 16 9.5C16 10.3284 15.3284 11 14.5 11C13.6716 11 13 10.3284 13 9.5C13 8.67157 13.6716 8 14.5 8Z",
  defaultProps,
});

export const ECashIcon = BankNote01;
export const WalletIcon = Wallet02;
export const DownloadIcon = Download01;

export const TranslateIcon = Translate01;
export const ChannelsIcon = MessageChatSquare;
export const ThreadIcon = MessageChatSquare;
export const ThingsIcon = Package;
export const TorrentIcon = Magnet;
export const TrackIcon = Recording02;

export const InboxIcon = Download01;
export const OutboxIcon = Upload01;

export const WikiIcon = BookOpen01;

export const ArticleIcon = Edit04;
export const VideoIcon = Film02;

export const MediaIcon = Camera01;
