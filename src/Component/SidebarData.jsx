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
    liink: "/",
  },
  {
    title: "メール",
    icon: <MarkEmailReadIcon />,
    liink: "/mail",
  },
  {
    title: "アナリティクス",
    icon: <AutoGraphIcon />,
    liink: "/access",
  },
  {
    title: "友達追加",
    icon: <PersonAddIcon />,
    liink: "/addfriends",
  },
  {
    title: "お支払い設定",
    icon: <CurrencyYenIcon />,
    liink: "/payment",
  },
  {
    title: "アップロード",
    icon: <BackupIcon />,
    liink: "/upload",
  },
  {
    title: "詳細設定",
    icon: <SettingsIcon />,
    link: "/settings",
  },
]