import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import MarkEmailReadIcon from '@mui/icons-material/MarkEmailRead';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import CurrencyYenIcon from '@mui/icons-material/CurrencyYen';
import BackupIcon from '@mui/icons-material/Backup';
import SettingsIcon from '@mui/icons-material/Settings';

export const SidebarData = [
  {
    title: "ホーム",
    icon: <HomeIcon />,
    link: "/",
  },
  {
    title: "メール",
    icon: <MarkEmailReadIcon />,
    link: "/mail",
  },
  {
    title: "アナリティクス",
    icon: <AutoGraphIcon />,
    link: "/access",
  },
  {
    title: "友達追加",
    icon: <PersonAddIcon />,
    link: "/addfriends",
  },
  {
    title: "お支払い設定",
    icon: <CurrencyYenIcon />,
    link: "/payment",
  },
  {
    title: "アップロード",
    icon: <BackupIcon />,
    link: "/upload",
  },
  {
    title: "詳細設定",
    icon: <SettingsIcon />,
    link: "/settings",
  },
]