import ListCourses from '~/components/Popper/Courses';
import styles from './Blog.module.scss';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import { Buffer } from 'buffer';
import { FilterData } from '~/services';
import Button from '~/components/Button/Button';
import Sidebar from '../Sidebar/Sidebar';
import { CommentIcon, LoveIcon, SaveIcon, SavedIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Blog() {
    const icon = [
        {
            title: 'Smileys',
            icon: Object.assign({}, [
                '🙂',
                '😀',
                '😄',
                '😆',
                '😅',
                '😂',
                '🤣',
                '😊',
                '☺️',
                '😌',
                '😉',
                '😏',
                '😍',
                '😘',
                '😗',
                '😙',
                '😚',
                '🤗',
                '😳',
                '🙃',
                '😇',
                '😈',
                '😛',
                '😝',
                '😜',
                '😋',
                '🤤',
                '🤓',
                '😎',
                '🤑',
                '😒',
                '🙁',
                '☹️',
                '😞',
                '😔',
                '😖',
                '😓',
                '😢',
                '😢',
                '😭',
                '😟',
                '😣',
                '😩',
                '😫',
                '😕',
                '🤔',
                '🙄',
                '😤',
                '😠',
                '😡',
                '😶',
                '🤐',
                '😐',
                '😑',
                '😯',
                '😲',
                '😧',
                '😨',
                '😰',
                '😱',
                '😪',
                '😴',
                '😬',
                '🤥',
                '🤧',
                '🤒',
                '😷',
                '🤕',
                '😵',
                '🤢',
                '🤠',
                '🤡',
                '👿',
                '👹',
                '👺',
                '👻',
                '💀',
                '👽',
                '👾',
                '🤖',
                '💩',
                '🎃',
            ]),
        },
        {
            title: 'Gestures and People',
            icon: Object.assign({}, [
                '👍',
                '👎',
                '✌️',
                '🤞',
                '👌',
                '🤙',
                '🤘',
                '🖕',
                '☝️',
                '💅',
                '👉',
                '👈',
                '👇',
                '👆',
                '👊',
                '✊',
                '🤜',
                '🤛',
                '💪',
                '✍️',
                '🙏',
                '🤳',
                '👏',
                '🤝',
                '🙌',
                '👐',
                '✋',
                '🖐️',
                '👋',
                '🖖',
                '👂',
                '👃',
                '👁️',
                '👀',
                '👁️&zwj;🗨️',
                '👅',
                '👣',
                '👤',
                '👥',
                '🗣️',
                '👶',
                '👦',
                '👧',
                '👨',
                '👩',
                '👱',
                '👴',
                '👵',
                '🎅',
                '🤶',
                '👮',
                '👷',
                '💂',
                '🕵️',
                '👳',
                '👲',
                '🤵',
                '👰',
                '🤴',
                '👸',
                '🙋',
                '💁',
                '🙅',
                '🙆',
                '🤷',
                '🤦',
                '🙎',
                '🙍',
                '💆',
                '💇',
                '🤰',
                '👯',
                '🙇',
                '👼',
                '💑',
                '👩&zwj;❤️&zwj;👩',
                '👨&zwj;❤️&zwj;👨',
                '💏',
                '👩&zwj;❤️&zwj;💋&zwj;👩',
                '👨&zwj;❤️&zwj;💋&zwj;👨',
                '🚶',
                '🏃',
                '🕴️',
                '💃',
                '🕺',
                '🛀',
                '🛌',
                '👫',
                '👭',
                '👬',
                '🤸',
                '🏋️',
                '⛹️',
                '🤾',
                '⛷️',
                '🏂',
                '🏌️',
                '🏄',
                '🏊',
                '🤽',
                '🤺',
                '🤼',
                '🚣',
                '🏇',
                '🚴',
                '👪',
                '👨&zwj;👩&zwj;👧',
                '👨&zwj;👩&zwj;👧&zwj;👦',
                '👨&zwj;👩&zwj;👦&zwj;👦',
                '👨&zwj;👩&zwj;👧&zwj;👧',
                '👩&zwj;👩&zwj;👦',
                '👩&zwj;👩&zwj;👧',
                '👩&zwj;👩&zwj;👧&zwj;👦',
                '👩&zwj;👩&zwj;👦&zwj;👦',
                '👩&zwj;👩&zwj;👧&zwj;👧',
                '👨&zwj;👨&zwj;👦',
                '👨&zwj;👨&zwj;👧',
                '👨&zwj;👨&zwj;👧&zwj;👦',
                '👨&zwj;👨&zwj;👦&zwj;👦',
                '👨&zwj;👨&zwj;👧&zwj;👧',
            ]),
        },
        {
            title: 'Hearts, Clothes, Activities',
            icon: Object.assign({}, [
                '♥️',
                '❤️',
                '💛',
                '💚',
                '💙',
                '💜',
                '🖤',
                '💖',
                '💝',
                '💔',
                '❣️',
                '💕',
                '💞',
                '💓',
                '💗',
                '💘',
                '💟',
                '💌',
                '💋',
                '👄',
                '💄',
                '💍',
                '📿',
                '🎁',
                '👙',
                '👗',
                '👚',
                '👕',
                '👘',
                '🎽',
                '👘',
                '👖',
                '👠',
                '👡',
                '👢',
                '👟',
                '👞',
                '👒',
                '🎩',
                '🎓',
                '👑',
                '⛑️',
                '👓',
                '🕶️',
                '🌂',
                '👛',
                '👝',
                '👜',
                '💼',
                '🎒',
                '🛍️',
                '🛒',
                '🎭',
                '🎦',
                '🎨',
                '🤹',
                '🎊',
                '🎉',
                '🎈',
                '🎧',
                '🎷',
                '🎺',
                '🎸',
                '🎻',
                '🥁',
                '🎹',
                '🎤',
                '🎵',
                '🎶',
                '🎼',
                '⚽',
                '🏀',
                '🏈',
                '⚾',
                '🏐',
                '🏉',
                '🎱',
                '🎾',
                '🏸',
                '🏓',
                '🏏',
                '🏑',
                '🏒',
                '🥅',
                '⛸️',
                '🎿',
                '🥊',
                '🥋',
                '⛳',
                '🎳',
                '🏹',
                '🎣',
                '🎯',
                '🚵',
                '🎖️',
                '🏅',
                '🥇',
                '🥈',
                '🥉',
                '🏆',
            ]),
        },
        {
            title: 'Foods, drinks',
            icon: Object.assign({}, [
                '🍏',
                '🍎',
                '🍐',
                '🍊',
                '🍋',
                '🍌',
                '🍉',
                '🍇',
                '🍓',
                '🍈',
                '🥝',
                '🥑',
                '🍍',
                '🍒',
                '🍑',
                '🍆',
                '🥒',
                '🥕',
                '🌶',
                '🌽',
                '🍅',
                '🥔',
                '🍠',
                '🌰',
                '🥜',
                '🍯',
                '🥐',
                '🍞',
                '🥖',
                '🧀',
                '🥚',
                '🍳',
                '🥓',
                '🍤',
                '🍗',
                '🍖',
                '🍕',
                '🌭',
                '🍔',
                '🍟',
                '🥙',
                '🌮',
                '🌯',
                '🥗',
                '🥘',
                '🍝',
                '🍜',
                '🍲',
                '🍣',
                '🍱',
                '🍛',
                '🍚',
                '🍙',
                '🍘',
                '🍢',
                '🍡',
                '🍧',
                '🍨',
                '🍦',
                '🥞',
                '🍰',
                '🎂',
                '🍮',
                '🍭',
                '🍥',
                '🍬',
                '🍫',
                '🍿',
                '🍩',
                '🍪',
                '🍼',
                '🥛',
                '☕',
                '🍵',
                '🍶',
                '🍺',
                '🍻',
                '🥂',
                '🍷',
                '🥃',
                '🍸',
                '🍹',
                '🍾',
                '🥄',
                '🍴',
                '🍽',
            ]),
        },
        {
            title: 'Animals',
            icon: Object.assign({}, [
                '😺',
                '😸',
                '😹',
                '😻',
                '😼',
                '😽',
                '🙀',
                '😿',
                '😾',
                '🐱',
                '🐶',
                '🐰',
                '🐭',
                '🐹',
                '🦊',
                '🐻',
                '🐼',
                '🐨',
                '🐯',
                '🦁',
                '🐮',
                '🐗',
                '🐷',
                '🐽',
                '🐸',
                '🐵',
                '🙈',
                '🙉',
                '🙊',
                '🦍',
                '🐺',
                '🐑',
                '🐐',
                '🐏',
                '🐴',
                '🦄',
                '🦌',
                '🦏',
                '🦅',
                '🐤',
                '🐣',
                '🐥',
                '🐔',
                '🐓',
                '🦃',
                '🐦',
                '🦆',
                '🦇',
                '🦉',
                '🕊️',
                '🐧',
                '🐕',
                '🐩',
                '🐈',
                '🐇',
                '🐁',
                '🐀',
                '🐿',
                '🐒',
                '🐖',
                '🐆',
                '🐅',
                '🐃',
                '🐂',
                '🐄',
                '🐎',
                '🐪',
                '🐫',
                '🐘',
                '🐊',
                '🐢',
                '🐠',
                '🐟',
                '🐡',
                '🐬',
                '🦈',
                '🐳',
                '🐋',
                '🦑',
                '🐙',
                '🦐',
                '🐚',
                '🦀',
                '🦂',
                '🦎',
                '🐍',
                '🐛',
                '🐜',
                '🕷️',
                '🕸️',
                '🐞',
                '🦋',
                '🐝',
                '🐌',
                '🐲',
                '🐉',
                '🐾',
            ]),
        },
        {
            title: 'Plants, Nature, Weather',
            icon: Object.assign({}, [
                '🌼',
                '🌸',
                '🌺',
                '🏵️',
                '🌻',
                '🌷',
                '🌹',
                '🥀',
                '💐',
                '🌾',
                '🎋',
                '☘',
                '🍀',
                '🍃',
                '🍂',
                '🍁',
                '🌱',
                '🌿',
                '🎍',
                '🌵',
                '🌴',
                '🌳',
                '🌳',
                '🎄',
                '🍄',
                '🌎',
                '🌍',
                '🌏',
                '🌜',
                '🌛',
                '🌕',
                '🌖',
                '🌗',
                '🌘',
                '🌑',
                '🌒',
                '🌓',
                '🌔',
                '🌚',
                '🌝',
                '🌙',
                '💫',
                '⭐',
                '🌟',
                '✨',
                '⚡',
                '🔥',
                '💥',
                '☄️',
                '🌞',
                '☀️',
                '🌤️',
                '⛅',
                '🌥️',
                '🌦️',
                '☁️',
                '🌧️',
                '⛈️',
                '🌩️',
                '🌨️',
                '🌈',
                '💧',
                '💦',
                '☂️',
                '☔',
                '🌊',
                '🌫',
                '🌪',
                '💨',
                '❄',
                '🌬',
                '⛄',
                '☃️',
            ]),
        },
        {
            title: 'Travel, Places, Buildings',
            icon: Object.assign({}, [
                '🚗',
                '🚕',
                '🚙',
                '🚌',
                '🚎',
                '🏎',
                '🚓',
                '🚑',
                '🚒',
                '🚐',
                '🚚',
                '🚛',
                '🚜',
                '🛴',
                '🚲',
                '🛵',
                '🏍',
                '🚘',
                '🚖',
                '🚍',
                '🚔',
                '🚨',
                '💺',
                '✈',
                '🛫',
                '🛬',
                '🛩',
                '🚁',
                '🚀',
                '🛰',
                '🚡',
                '🚠',
                '🚟',
                '🚃',
                '🚋',
                '🚞',
                '🚝',
                '🚄',
                '🚅',
                '🚈',
                '🚂',
                '🚆',
                '🚊',
                '🚇',
                '🚉',
                '🛶',
                '⛵',
                '🛥',
                '🚤',
                '🚢',
                '⛴',
                '🛳',
                '⚓',
                '🚧',
                '⛽',
                '🚏',
                '🚦',
                '🚥',
                '🛣',
                '🛤',
                '🏗',
                '🏭',
                '🏠',
                '🏡',
                '🏘',
                '🏚',
                '🏢',
                '🏬',
                '🏤',
                '🏣',
                '🏥',
                '🏦',
                '🏪',
                '🏫',
                '🏨',
                '🏩',
                '🏛',
                '🏰',
                '🏯',
                '🏟️',
                '⛪',
                '💒',
                '🕌',
                '🕍',
                '🕋',
                '⛩',
                '🗼',
                '🗿',
                '🗽',
                '🗺',
                '🎪',
                '🎠',
                '🎡',
                '🎢',
                '⛲',
                '⛱',
                '🏖',
                '🏝',
                '🏕',
                '⛺',
                '🗾',
                '⛰',
                '🏔',
                '🗻',
                '🌋',
                '🏞',
                '🏜',
                '🌅',
                '🌄',
                '🎑',
                '🌠',
                '🎇',
                '🎆',
                '🏙',
                '🌇',
                '🌆',
                '🌃',
                '🌌',
                '🌉',
                '🌁',
            ]),
        },
        {
            title: 'Objects',
            icon: Object.assign({}, [
                '📱',
                '📲',
                '💻',
                '🖥',
                '⌨',
                '🖨',
                '🖱',
                '🖲',
                '🕹',
                '🎮',
                '💽',
                '💾',
                '💿',
                '📀',
                '📼',
                '📷',
                '📸',
                '📹',
                '🎥',
                '📽',
                '🎞',
                '🎬',
                '📞',
                '☎',
                '📟',
                '📠',
                '📺',
                '📻',
                '🎙',
                '🎚',
                '🎛',
                '📡',
                '📢',
                '📣',
                '🔔',
                '💡',
                '🕯',
                '🔦',
                '🔋',
                '🔌',
                '⌚',
                '⏱',
                '⏲',
                '⏰',
                '🕰',
                '⌛',
                '⏳',
                '🔮',
                '💎',
                '🎲',
                '🎰',
                '💸',
                '💵',
                '💴',
                '💶',
                '💷',
                '💰',
                '💳',
                '💲',
                '💱',
                '⚖',
                '🔫',
                '💣',
                '🔪',
                '🗡',
                '⚔',
                '🛡',
                '🚬',
                '⚰',
                '⚱',
                '🗜️',
                '🔧',
                '🔨',
                '⚒',
                '🛠',
                '⛏',
                '🔩',
                '⚙',
                '⛓',
                '💈',
                '🌡',
                '💊',
                '💉',
                '⚗',
                '🔬',
                '🔭',
                '🚿',
                '🛁',
                '🚽',
                '🛎',
                '🔑',
                '🗝',
                '🚪',
                '🛋',
                '🛏',
                '🖼',
                '🏺',
                '🗑',
                '🛢',
                '🕳',
                '🏮',
                '🎏',
                '🎎',
                '🎐',
                '🎫',
                '🎟️',
                '🎀',
                '🎗️',
                '📯',
                '✉',
                '📩',
                '📨',
                '📧',
                '📦',
                '📪',
                '📫',
                '📬',
                '📭',
                '📮',
                '📥',
                '📤',
                '📜',
                '📃',
                '📄',
                '📑',
                '📊',
                '📈',
                '📉',
                '🗒',
                '📅',
                '📆',
                '🗓',
                '📇',
                '🗃',
                '🗳',
                '🗄',
                '📋',
                '📁',
                '📂',
                '🗂',
                '📓',
                '📔',
                '📒',
                '📕',
                '📗',
                '📘',
                '📙',
                '📚',
                '📖',
                '🗞',
                '📰',
                '📝',
                '✏',
                '🖊',
                '🖍',
                '🖌',
                '🖋',
                '✒',
                '📌',
                '📍',
                '📎',
                '🖇',
                '🔖',
                '🏷',
                '🔗',
                '🔍',
                '🔎',
                '📐',
                '📏',
                '✂',
                '🔒',
                '🔓',
                '🔏',
                '🔐',
            ]),
        },
        {
            title: 'Symbols',
            icon: Object.assign({}, [
                '❗',
                '❕',
                '❓',
                '❔',
                '‼️',
                '⁉️',
                '✅',
                '❌',
                '⭕',
                '💢',
                '🚫',
                '🔞',
                '📵',
                '🔇',
                '🔕',
                '🚭',
                '🚳',
                '🚱',
                '🚷',
                '🚯',
                '🛑',
                '⛔',
                '🚸',
                '⚠️',
                '☢️',
                '☣️',
                '☠️',
                '❎',
                '♻️',
                '☯️',
                '💯',
                '💤',
                '🔆',
                '🔅',
                '🌀',
                '♨️',
                '✴️',
                '✳️',
                '🌐',
                '🔈',
                '🕎',
                '⚜️',
                '🔱',
                '〽️',
                '〰️',
                '🔚',
                '🔙',
                '🔛',
                '🔝',
                '🔜',
                '✡️',
                '✝️',
                '☦️',
                '☪️',
                '🕉️',
                '☸️',
                '🛐',
                '☮️',
                '⚛️',
                '❇️',
                '♀️',
                '♂️',
                '✔️',
                '✖️',
                '➕',
                '➖',
                '➗',
                '©️',
                '®️',
                '™️',
                '☑️',
                '🚰',
                '🛄',
                '🛅',
                '🛂',
                '🛃',
                'Ⓜ️',
                '🅿️',
                '🚾',
                '🏧',
                '🚮',
                '♿',
                '🚹',
                '🚺',
                '🚻',
                '🚼',
                '🆚',
                '📴',
                '📳',
                '🆘',
                '🆗',
                '🆙',
                '🆒',
                '🆖',
                '🆕',
                '🆓',
                '🔠',
                '🔤',
                '🔡',
                '🔣',
                '🇦',
                '🇧',
                '🇨',
                '🇩',
                '🇪',
                '🇫',
                '🇬',
                '🇭',
                '🇮',
                '🇯',
                '🇰',
                '🇱',
                '🇲',
                '🇳',
                '🇴',
                '🇵',
                '🇶',
                '🇷',
                '🇸',
                '🇹',
                '🇺',
                '🇻',
                '🇼',
                '🇾',
                '🇽',
                '🇿',
                '0️⃣',
                '1️⃣',
                '2️⃣',
                '3️⃣',
                '4️⃣',
                '5️⃣',
                '6️⃣',
                '7️⃣',
                '8️⃣',
                '9️⃣',
                '🔟',
                '🔢',
                '#️⃣',
                '*️⃣',
                'ℹ️',
                '📶',
                '▶️',
                '⏸️',
                '⏹️',
                '⏺️',
                '⏯️',
                '◀️',
                '🔼',
                '🔽',
                '⏩',
                '⏪',
                '⏫',
                '⏬',
                '⏮️',
                '⏭️',
                '⏏️',
                '🔀',
                '🔁',
                '🔂',
                '🔄',
                '🔃',
                '↩️',
                '↪️',
                '⤴️',
                '⤵️',
                '⬆️',
                '⬇',
                '⬅️',
                '➡️',
                '↗️',
                '↙️',
                '↘️',
                '↖️',
                '↔️',
                '↕️',
                '♈',
                '♉',
                '♊',
                '♋',
                '♌',
                '♍',
                '♎',
                '♏',
                '♐',
                '♑',
                '♒',
                '♓',
                '⛎',
                '🆔',
                '🈳',
                '🈂️',
                '🈁',
                '🈯',
                '🈹',
                '🈚',
                '🈶',
                '🈷️',
                '🈸',
                '🈺',
                '🉑',
                '㊗️',
                '㊙️',
                '🈴',
                '🈲',
                '🅰️',
                '🅱️',
                '🆎',
                '🅾️',
                '🆑',
                '🔰',
                '📛',
                '💮',
                '💠',
                '🔶',
                '🔷',
                '🔸',
                '🔹',
                '🔺',
                '🔻',
                '▪️',
                '▫️',
                '◾',
                '◽',
                '◼️',
                '◻️',
                '⬛',
                '⬜',
                '🔲',
                '🔳',
                '⚪',
                '⚫',
                '🔴',
                '🔵',
                '🔘',
                '🗨️',
                '💭',
                '🗯️',
                '💬',
                '➰',
                '♠️',
                '♣️',
                '♦️',
                '🃏',
                '🀄',
                '🎴',
                '💹',
                '🔉',
                '🔊',
                '➿',
                '🕐',
                '🕑',
                '🕒',
                '🕓',
                '🕔',
                '🕕',
                '🕖',
                '🕗',
                '🕘',
                '🕙',
                '🕚',
                '🕛',
                '🕧',
                '🕜',
                '🕝',
                '🕞',
                '🕟',
                '🕠',
                '🕡',
                '🕢',
                '🕣',
                '🕤',
                '🕥',
                '🕦',
            ]),
        },
        {
            title: 'Flags',
            icon: Object.assign({}, [
                '🏳️',
                '🏴',
                '🏁',
                '🚩',
                '🏳️&zwj;🌈',
                '🇦🇫',
                '🇦🇽',
                '🇦🇱',
                '🇩🇿',
                '🇦🇸',
                '🇦🇩',
                '🇦🇴',
                '🇦🇮',
                '🇦🇶',
                '🇦🇬',
                '🇦🇷',
                '🇦🇲',
                '🇦🇼',
                '🇦🇺',
                '🇦🇹',
                '🇦🇿',
                '🇧🇸',
                '🇧🇭',
                '🇧🇩',
                '🇧🇧',
                '🇧🇾',
                '🇧🇪',
                '🇧🇿',
                '🇧🇯',
                '🇧🇲',
                '🇧🇹',
                '🇧🇴',
                '🇧🇶',
                '🇧🇦',
                '🇧🇼',
                '🇧🇷',
                '🇮🇴',
                '🇻🇬',
                '🇧🇳',
                '🇧🇬',
                '🇧🇫',
                '🇧🇮',
                '🇨🇻',
                '🇰🇭',
                '🇨🇲',
                '🇨🇦',
                '🇮🇨',
                '🇰🇾',
                '🇨🇫',
                '🇹🇩',
                '🇨🇱',
                '🇨🇳',
                '🇨🇽',
                '🇨🇨',
                '🇨🇴',
                '🇰🇲',
                '🇨🇬',
                '🇨🇩',
                '🇨🇰',
                '🇨🇷',
                '🇨🇮',
                '🇭🇷',
                '🇨🇺',
                '🇨🇼',
                '🇨🇾',
                '🇨🇿',
                '🇩🇰',
                '🇩🇯',
                '🇩🇲',
                '🇩🇴',
                '🇪🇨',
                '🇪🇬',
                '🇸🇻',
                '🇬🇶',
                '🇪🇷',
                '🇪🇪',
                '🇪🇹',
                '🇪🇺',
                '🇫🇰',
                '🇫🇴',
                '🇫🇯',
                '🇫🇮',
                '🇫🇷',
                '🇬🇫',
                '🇵🇫',
                '🇹🇫',
                '🇬🇦',
                '🇬🇲',
                '🇬🇪',
                '🇩🇪',
                '🇬🇭',
                '🇬🇮',
                '🇬🇷',
                '🇬🇱',
                '🇬🇩',
                '🇬🇵',
                '🇬🇺',
                '🇬🇹',
                '🇬🇬',
                '🇬🇳',
                '🇬🇼',
                '🇬🇾',
                '🇭🇹',
                '🇭🇳',
                '🇭🇰',
                '🇭🇺',
                '🇮🇸',
                '🇮🇳',
                '🇮🇩',
                '🇮🇷',
                '🇮🇶',
                '🇮🇪',
                '🇮🇲',
                '🇮🇱',
                '🇮🇹',
                '🇯🇲',
                '🇯🇵',
                '🎌',
                '🇯🇪',
                '🇯🇴',
                '🇰🇿',
                '🇰🇪',
                '🇰🇮',
                '🇽🇰',
                '🇰🇼',
                '🇰🇬',
                '🇱🇦',
                '🇱🇻',
                '🇱🇧',
                '🇱🇸',
                '🇱🇷',
                '🇱🇾',
                '🇱🇮',
                '🇱🇹',
                '🇱🇺',
                '🇲🇴',
                '🇲🇰',
                '🇲🇬',
                '🇲🇼',
                '🇲🇾',
                '🇲🇻',
                '🇲🇱',
                '🇲🇹',
                '🇲🇭',
                '🇲🇶',
                '🇲🇷',
                '🇲🇺',
                '🇾🇹',
                '🇲🇽',
                '🇫🇲',
                '🇲🇩',
                '🇲🇨',
                '🇲🇳',
                '🇲🇪',
                '🇲🇸',
                '🇲🇦',
                '🇲🇿',
                '🇲🇲',
                '🇳🇦',
                '🇳🇷',
                '🇳🇵',
                '🇳🇱',
                '🇳🇨',
                '🇳🇿',
                '🇳🇮',
                '🇳🇪',
                '🇳🇬',
                '🇳🇺',
                '🇳🇫',
                '🇲🇵',
                '🇰🇵',
                '🇳🇴',
                '🇴🇲',
                '🇵🇰',
                '🇵🇼',
                '🇵🇸',
                '🇵🇦',
                '🇵🇬',
                '🇵🇾',
                '🇵🇪',
                '🇵🇭',
                '🇵🇳',
                '🇵🇱',
                '🇵🇹',
                '🇵🇷',
                '🇶🇦',
                '🇷🇪',
                '🇷🇴',
                '🇷🇺',
                '🇷🇼',
                '🇧🇱',
                '🇸🇭',
                '🇰🇳',
                '🇱🇨',
                '🇵🇲',
                '🇻🇨',
                '🇼🇸',
                '🇸🇲',
                '🇸🇹',
                '🇸🇦',
                '🇸🇳',
                '🇷🇸',
                '🇸🇨',
                '🇸🇱',
                '🇸🇬',
                '🇸🇽',
                '🇸🇰',
                '🇸🇮',
                '🇸🇧',
                '🇸🇴',
                '🇿🇦',
                '🇬🇸',
                '🇰🇷',
                '🇸🇸',
                '🇪🇸',
                '🇱🇰',
                '🇸🇩',
                '🇸🇷',
                '🇸🇿',
                '🇸🇪',
                '🇨🇭',
                '🇸🇾',
                '🇹🇼',
                '🇹🇯',
                '🇹🇿',
                '🇹🇭',
                '🇹🇱',
                '🇹🇬',
                '🇹🇰',
                '🇹🇴',
                '🇹🇹',
                '🇹🇳',
                '🇹🇷',
                '🇹🇲',
                '🇹🇨',
                '🇹🇻',
                '🇺🇬',
                '🇺🇦',
                '🇦🇪',
                '🇬🇧',
                '🇺🇸',
                '🇻🇮',
                '🇺🇾',
                '🇺🇿',
                '🇻🇺',
                '🇻🇦',
                '🇻🇪',
                '🇻🇳',
                '🇼🇫',
                '🇪🇭',
                '🇾🇪',
                '🇿🇲',
                '🇿🇼',
            ]),
        },
    ];

    return (
        <>
            <Sidebar curPage="blog" />
            <aside className={cx('wrapper', 'grid')}>
                <div className={cx('list')}>
                    <div className={cx('item')}>
                        <a href="/" className={cx('avatar')}>
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///8mJibFxcU5OTmYmJimpqbIyMj8/Px4eHjx8fG6urqsrKzl5eXs7Ozz8/Ph4eHR0dGOjo7Nzc0yMjJzc3OLi4tmZmagoKC7u7tKSkptbW1PT09kZGQ/Pz9WVlYZGRkQEBApKSkcHByCgoI0NDRcXFxDQ0NYAjDbAAAJHklEQVR4nO2caVviMBDHG5G7UE4BWUVW1O//DbfkmEmag7qh7jP7zP+VIQf5NZPMJCkWxX+uh3/dgc7FhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhLf1201urL/Pjbx/ojuM4c5J/Xq0Ek/5rWfrDoQrNzmw/t7185vP1R0IPwZOsn+0ErN/b6f3WGnWLsbc+vtpcYf28xQjvKyHtXqga2r4Fi67WzvJnm2aIj0VN5EmQ3odr8qD7MxhWvYv4+d2dWOE/WpSSxiN5tfke6Rw9WynvsQZE1ORtJLytVUvi+10JnyNZr3+6VbV5Pc/QFu9ZCP9mZOcWaVfRdJOxeetDta6LFUnlvuteiCPu8t0AX1bPp1TtZOEjy0JC7F1eiSsB7sQq2Zpu+Qxnqn0Xo5kDxaXZs6xB907bEJVle5D2KucpLDG9CJEfD2d3ZimtRmr758Fx/qtNP2bh7KV7kN4Eo7jK+2Oj+J2+iLEIJYnNdZfHzWDh+UPERZze3WpJ5/ARBnvYN29aarVtfry6jFRZvBDhCtxsJMLK/lRVw9Pk490w6+VttBbX/0jhIUQ9rpfTz50IPVIhe10KmI5V32KVoBqqnZIaNbCg9vXkdWxY10/GJ8mH/6L/uYqVgA165Rwqeffs3A8Rv1ccXWvwnbaTwH8Mt/cIiT46pRwZlaRmZi4NUeQ2IetUUVM4WbfzBe32n8NuySsTNsX1xQX1jIpu+vZqfYE4Q6YGG2Z6h7o1CWhEC/wlz0e2zr5ZRJy1W8u+Trsei4CAk+eiFVsTSbxvHxCs7GYus5tZFnmLrAmmom2LXw9m69NektLq0M8L5PwLCAo+3KXheswjE1i4tvpULfshZsFDG/MhL+nTMJriRL7ZU2bjbAWG7lsOnYK25aAH9netJzvKJPwZHHUa429VVha8GpptO0UZlrAEGEr+KstRUqZhC+2odVTz5rxW3vY1EZnj7mjeMvG19+OZlopk3Br96R0je4KYcxWryswTz+gZd8fLE3W3sv6G2USyrDXbNSvU8/yGDLqN0vlXBYEtwUe3fdkvyHr43soEWUS7mXuUKcWzrySXTVR2aoxLJVp2Qvb+lH2v1MmoV4w9BHV2LFEZW5mi6sbMlHA3LQ8KhoCV9HWGd5QJuFUZRuMyplYR5m3cUqaOYsHSY2w5QwZIU/5F8okXLsDIYcU7zGkKWpiE6foh4GnSI2w7QgZLQ8abymT0AyFft5yrUGPoWbp0S2q7HQKTb+4LYKjjOw6vq1MQuOcTQgqpx54DLVi6rXkoouqBQTWk+b+CMz3XvcBmYRwKq7Dj6Nts8aI9QJqnLy00ws03QjbIBQYFvdRJqFXQE49WAV3KlMttcb+pIvE6VZGWkyfM7bXvQjNrFFTDxYJNcZqg6XjGGW0r1DRHatP+PxeV495hGePUO0ZwGMoYL2aLOyeQ0U3bBvD5+PiPsojxAIQmqwtJNgkqdVlbD8KqOnG1yv4vM2dTRvlEaJNwcr3YiEV4DDVwF0nqZmjsEa5QQ06i7tsnYpcQtirWram4jFzBGeewds1cY3FzX4KgxqnRfSTX8Ut9d1bXHmJW3ql8ggvgQJ9d2QmVv5v60nAHskEtd8n7IlRLaggU74XzSPEWYPP7s39wLj2k8KCCAZRnLDt8A1CKZwokfufPMIBFLDWdn3GpHd3Z11AzsxjFajqhG1IGDxm9LULdcFWHiEOhBV76adq7NHE2PIRowvA4R+HW7x5Qa/UMSHuEOzbar3308s9mJF7234M92wabDGhjglxubDX9pVllwVudt02TlDVWf7QWySu/211TIivgNhnoWf9mbZc2EY4Hg7Popzz6if4uOU5VMeE+MKN0442Xu0xDHAjeoGqTtiGHrblcXDHhHCe5AYmxgK1/cFsdQ4soG0HHCPylvvDjgnB3TZOzIz1qisNA7wOlhHuvRF8Zcs9Pg56F4TvkN84+TOzSTPptcaNNHGVcj7Gqd3OIeJmpAvCDeQ3T67N58pjrEJmN4TKzsdBF5tQt4Rf0XzTTz3H5N8NB4d+wbk7xR63O8bolhDuULzTW7jjVANxjcWaR9h4FuW8Rn2Gj72z4qC6JcSthee8Zk43rxczzQNerOzu5nF+torbuiVE9+zNGei/8hgzf0RimwIkb3Ws3y0hGpp/qAKORHqMJ3+U0fOVkZqtzLRbQlws/EMVWBOVxxDeW674em7jNQNsNfQWQ1PdEuLWwr/qwyGS9IFzJRgrNxKw7hbbhDXdEq4hP/AeMhzExC6rq1iBlGl46pYwEpYo4YoRuSaDR+C97gOj22IQuyWMhJbNfkZWjGE0H2PNXaiio24JgSFoiGhs/hHfVRifeb9ygAmeeJtL64cIg9aEtcPvNu0h23/LGS7Bww/HUreEkB0OIWGaht85wInqBy/oSl4CNW11SojvhYSjD5hO4V0CzrbAJQwG9bEf6mh1Soi9iNiS9geRlQai8+ChE+TemIrRq1ajHMJTsosFnPpGzpRw/xwssDH+Mv3yF87mDgjxiCQSXmmGWPNQPfJ2qJnH81QnMa7qgBANJOa2lgkTtoKadaQAnIsnlhvoQ8xUcghxaxE7UpEH29GfPUHAEA1dHkxcGN1IoVNdRC4ccwhxCrzFWqhS557gTRK/qTjp2G4UnurmIqcaRH85lEPY4uWefeqW7HC7fq1nc77s/RrzdaBCjkmZOg1IEm7ShL3bPXxP/Z5g0IqwwJ9YTqZPv+Sp8vl11x/KaTxa9lO/+yrihGiBlsD5nkeB3OA8WIYXoXmgfvL08HO/rJoVFodVizPVGOGuHPjCXWAgswy+8Bqx0b7ffHlzM3h+3j3tZdn9antq+VMM/r8Y/4GYkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL4eiof/XI9/ALVJU38w2771AAAAAElFTkSuQmCC"
                                alt=""
                            />
                            <p>Đạt Nguyễn</p>
                        </a>
                        <div className={cx('line')}></div>
                        <div className={cx('content')}>
                            <div className={cx('par')}>
                                <p>
                                    Mọi người ơi cho mình hỏi xíu,Mọi người ơi cho mình hỏi xíuMọi người ơi cho mình hỏi
                                    xíu
                                </p>
                                <p>
                                    Mọi người ơi cho mình hỏi xíu,Mọi người ơi cho mình hỏi xíuMọi người ơi cho mình hỏi
                                    xíu
                                </p>
                                <p>
                                    Mọi người ơi cho mình hỏi xíu,Mọi người ơi cho mình hỏi xíuMọi người ơi cho mình hỏi
                                    xíu
                                </p>
                            </div>
                            <div className={cx('content-img')}>
                                <div className={cx('list-img')}>
                                    <div className={cx('img')} style={{ transform: `translateX(${0 * 468}px)` }}>
                                        <div className={cx('img-cover')}>
                                            <img
                                                src="./assets/images/247153437_329304145665879_1766242265017038593_n.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('img')} style={{ transform: `translateX(${1 * 468}px)` }}>
                                        <div className={cx('img-cover')}>
                                            <img
                                                src="./assets/images/274361811_1134326850652140_2830842802181081694_n.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('img')} style={{ transform: `translateX(${2 * 468}px)` }}>
                                        <div className={cx('img-cover')}>
                                            <img
                                                src="./assets/images/359930521_291394970213450_2825087993483664598_n.jpg"
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                    <div className={cx('img-now')}>1/3</div>
                                    <Button
                                        className={cx('img-pre')}
                                        onClick={(e) => {
                                            var parentElement = e.target.parentElement;
                                            var childs = parentElement.childNodes;
                                            var startIndex = 0;
                                            // 468
                                            for (let index = 0; index < childs.length - 3; index++) {
                                                const element = childs[index];
                                                if (index === 0) {
                                                    startIndex = parseInt(element.style.transform.slice(11, -3)) / 468;
                                                    if (-startIndex > 0) {
                                                        startIndex++;
                                                        parentElement.style.height = `${
                                                            childs[-startIndex].clientHeight
                                                        }px`;
                                                        childs[childs.length - 3].innerHTML = `${-startIndex + 1}/${
                                                            childs.length - 3
                                                        }`;
                                                    } else break;
                                                }
                                                element.style.transform = `translateX(${startIndex * 468}px)`;
                                                if (startIndex === 0) parentElement.style.height = element.clientHeight;
                                            }
                                        }}
                                        onLoad={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    ></Button>
                                    <Button
                                        className={cx('img-next')}
                                        onClick={(e) => {
                                            var parentElement = e.target.parentElement;
                                            var childs = parentElement.childNodes;
                                            var startIndex = 0;
                                            // 468
                                            for (let index = 0; index < childs.length - 3; index++) {
                                                const element = childs[index];
                                                if (index === 0) {
                                                    startIndex = parseInt(element.style.transform.slice(11, -3)) / 468;
                                                    if (-startIndex < childs.length - 4) {
                                                        startIndex--;
                                                        parentElement.style.height = `${
                                                            childs[-startIndex].clientHeight
                                                        }px`;
                                                        childs[childs.length - 3].innerHTML = `${-startIndex + 1}/${
                                                            childs.length - 3
                                                        }`;
                                                    } else break;
                                                }
                                                element.style.transform = `translateX(${startIndex * 468}px)`;
                                            }
                                        }}
                                    ></Button>
                                </div>
                            </div>
                        </div>
                        <div className={cx('react-now')}>
                            <div className={cx('react-block')}>
                                <div className={cx('react-item')}>
                                    <LoveIcon className={cx('icon')} />
                                    3123
                                </div>
                            </div>
                            <div className={cx('react-block')}>
                                <div className={cx('react-item')}>
                                    <CommentIcon className={cx('icon')} />
                                    3123
                                </div>
                                <div className={cx('react-item')}>
                                    <SavedIcon className={cx('icon')} />
                                    3123
                                </div>
                            </div>
                        </div>
                        <div className={cx('line')}></div>
                        <div className={cx('react')}>
                            <Button>Thích</Button>
                            <Button>Bình luận</Button>
                            <Button>
                                <SaveIcon className={cx('icon')} />
                                <SavedIcon className={cx('icon')} />
                                Lưu
                            </Button>
                        </div>
                        <div className={cx('line')}></div>
                        <div className={cx('comment')}>
                            <div className={cx('input')}>
                                <div className={cx('input-block')}>
                                    <div
                                        className={cx('input-text')}
                                        contentEditable="true"
                                        style={{ outline: '0px' }}
                                        onFocus={(e) => {
                                            var parentElement = e.target.parentElement;
                                            parentElement = parentElement.parentElement;
                                            var childs = parentElement.childNodes;
                                            childs[1].classList.add(cx('active'));
                                        }}
                                        onInput={(e) => {
                                            var parentElement = e.target.parentElement;
                                            var childs = parentElement.childNodes;
                                            if (e.target.textContent.length > 0) {
                                                childs[childs.length - 1].classList.add(cx('active'));
                                                childs[childs.length - 2].classList.add(cx('active'));
                                            } else {
                                                childs[childs.length - 1].classList.remove(cx('active'));
                                                childs[childs.length - 2].classList.remove(cx('active'));
                                            }
                                        }}
                                    ></div>
                                    <div
                                        className={cx('input-placeholder')}
                                        onClick={(e) => {
                                            var parentElement = e.target.parentElement;
                                            var childs = parentElement.childNodes;
                                            childs[0].focus();
                                        }}
                                    >
                                        Viết bình luận . . .
                                    </div>
                                    <Button className={cx('input-btn', 'submit')}></Button>
                                </div>
                                <div className={cx('input-block')}>
                                    <div className={cx('btn-add-icon')}>
                                        <Button className={cx('input-btn', 'add-icon')}></Button>
                                        <ul className={cx('list-icon')}>
                                            <li className={cx('icon-item')}></li>
                                        </ul>
                                    </div>
                                    <Button
                                        className={cx('input-btn', 'add-image')}
                                        onClick={(e) => {
                                            var input = e.target.childNodes[0];
                                            if (input !== undefined && input.nodeName === 'INPUT') input.click();
                                        }}
                                    >
                                        <input
                                            type="file"
                                            accept="video/*,image/*"
                                            onChange={(e) => {
                                                var parentElement = e.target.parentElement;
                                                parentElement = parentElement.parentElement;
                                                parentElement = parentElement.parentElement;
                                                var childs = parentElement.childNodes;
                                                childs = parentElement.childNodes[childs.length - 1];

                                                var submitBtn = parentElement.childNodes[0];
                                                submitBtn = submitBtn.childNodes;
                                                submitBtn = submitBtn[submitBtn.length - 1];
                                                if (e.target.files && e.target.files[0]) {
                                                    const file = e.target.files[0];
                                                    const url = URL.createObjectURL(file);
                                                    var child;
                                                    if (file.name.search('.mp4') !== -1) {
                                                        child = childs.childNodes[1];
                                                        child.style.padding = '6px 12px';
                                                        childs.childNodes[0].style.display = 'none';
                                                        childs.childNodes[1].style.display = 'block';
                                                        child.src = url;
                                                        child.play();
                                                    } else {
                                                        child = childs.childNodes[0];
                                                        child.style.height = '210px';
                                                        childs.childNodes[0].style.display = 'block';
                                                        childs.childNodes[1].style.display = 'none';
                                                        child.src = url;
                                                        child.style.padding = '6px 12px';
                                                    }
                                                    childs.style.height = '210px';
                                                    submitBtn.classList.add(cx('active'));
                                                }
                                            }}
                                        />
                                    </Button>
                                </div>
                                <div className={cx('input-block')}>
                                    <img src="" alt="" />
                                    <video height="210px" controls></video>
                                    <div
                                        className={cx('input-btn', 'cancel-icon')}
                                        onClick={(e) => {
                                            var parentElement = e.target.parentElement;
                                            if (parentElement.className !== cx('input-block'))
                                                parentElement = parentElement.parentElement;
                                            parentElement.style.height = '0px';
                                            var childs = parentElement.childNodes;
                                            childs[0].src = '';
                                            childs[1].src = '';
                                        }}
                                    >
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                            <div className={cx('list-comment')}>
                                <div className={cx('comment-item')}>
                                    <a href="/" className={cx('avatar')}>
                                        <img
                                            src="data:image/png;base64,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"
                                            alt=""
                                        />
                                    </a>
                                    <div className={cx('comment-content')}>
                                        <div className={cx('par')}>
                                            <p>
                                                Mọi người ơi cho mìMọi người ơi cho mìMọi người ơi cho mìMọi người ơi
                                                cho mìMọi người ơi cho mì
                                            </p>
                                        </div>
                                        <div className={cx('img')}>
                                            <img
                                                src="data:image/png;base64,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"
                                                alt=""
                                            />
                                        </div>
                                        <div className={cx('count-react')}>
                                            <div className={cx('react-comment')}>
                                                <Button>Thích</Button>
                                                <Button>Phản hồi</Button>
                                            </div>
                                            <div className={cx('count-block')}>
                                                <LoveIcon className={cx('love-icon')} />
                                                3123
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('comment-item')}>
                                    <a href="/" className={cx('avatar')}>
                                        <img
                                            src="data:image/png;base64,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"
                                            alt=""
                                        />
                                    </a>
                                    <div className={cx('comment-content')}>
                                        <div className={cx('par')}>
                                            <p className={cx('name')}>Đạt Nguyễn</p>
                                            <p>
                                                Mọi người ơi cho mìMọi người ơi cho mìMọi người ơi cho mìMọi người ơi
                                                cho mìMọi người ơi cho mì
                                            </p>
                                        </div>
                                        <div className={cx('count-react')}>
                                            <div className={cx('react-comment')}>
                                                <Button>Thích</Button>
                                                <Button>Phản hồi</Button>
                                            </div>
                                            <div className={cx('count-block')}>
                                                <LoveIcon className={cx('love-icon')} />
                                                3123
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('comment-item')}>
                                    <a href="/" className={cx('avatar')}>
                                        <img
                                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEUAAAD///8mJibFxcU5OTmYmJimpqbIyMj8/Px4eHjx8fG6urqsrKzl5eXs7Ozz8/Ph4eHR0dGOjo7Nzc0yMjJzc3OLi4tmZmagoKC7u7tKSkptbW1PT09kZGQ/Pz9WVlYZGRkQEBApKSkcHByCgoI0NDRcXFxDQ0NYAjDbAAAJHklEQVR4nO2caVviMBDHG5G7UE4BWUVW1O//DbfkmEmag7qh7jP7zP+VIQf5NZPMJCkWxX+uh3/dgc7FhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhPTFhLf1201urL/Pjbx/ojuM4c5J/Xq0Ek/5rWfrDoQrNzmw/t7185vP1R0IPwZOsn+0ErN/b6f3WGnWLsbc+vtpcYf28xQjvKyHtXqga2r4Fi67WzvJnm2aIj0VN5EmQ3odr8qD7MxhWvYv4+d2dWOE/WpSSxiN5tfke6Rw9WynvsQZE1ORtJLytVUvi+10JnyNZr3+6VbV5Pc/QFu9ZCP9mZOcWaVfRdJOxeetDta6LFUnlvuteiCPu8t0AX1bPp1TtZOEjy0JC7F1eiSsB7sQq2Zpu+Qxnqn0Xo5kDxaXZs6xB907bEJVle5D2KucpLDG9CJEfD2d3ZimtRmr758Fx/qtNP2bh7KV7kN4Eo7jK+2Oj+J2+iLEIJYnNdZfHzWDh+UPERZze3WpJ5/ARBnvYN29aarVtfry6jFRZvBDhCtxsJMLK/lRVw9Pk490w6+VttBbX/0jhIUQ9rpfTz50IPVIhe10KmI5V32KVoBqqnZIaNbCg9vXkdWxY10/GJ8mH/6L/uYqVgA165Rwqeffs3A8Rv1ccXWvwnbaTwH8Mt/cIiT46pRwZlaRmZi4NUeQ2IetUUVM4WbfzBe32n8NuySsTNsX1xQX1jIpu+vZqfYE4Q6YGG2Z6h7o1CWhEC/wlz0e2zr5ZRJy1W8u+Trsei4CAk+eiFVsTSbxvHxCs7GYus5tZFnmLrAmmom2LXw9m69NektLq0M8L5PwLCAo+3KXheswjE1i4tvpULfshZsFDG/MhL+nTMJriRL7ZU2bjbAWG7lsOnYK25aAH9netJzvKJPwZHHUa429VVha8GpptO0UZlrAEGEr+KstRUqZhC+2odVTz5rxW3vY1EZnj7mjeMvG19+OZlopk3Br96R0je4KYcxWryswTz+gZd8fLE3W3sv6G2USyrDXbNSvU8/yGDLqN0vlXBYEtwUe3fdkvyHr43soEWUS7mXuUKcWzrySXTVR2aoxLJVp2Qvb+lH2v1MmoV4w9BHV2LFEZW5mi6sbMlHA3LQ8KhoCV9HWGd5QJuFUZRuMyplYR5m3cUqaOYsHSY2w5QwZIU/5F8okXLsDIYcU7zGkKWpiE6foh4GnSI2w7QgZLQ8abymT0AyFft5yrUGPoWbp0S2q7HQKTb+4LYKjjOw6vq1MQuOcTQgqpx54DLVi6rXkoouqBQTWk+b+CMz3XvcBmYRwKq7Dj6Nts8aI9QJqnLy00ws03QjbIBQYFvdRJqFXQE49WAV3KlMttcb+pIvE6VZGWkyfM7bXvQjNrFFTDxYJNcZqg6XjGGW0r1DRHatP+PxeV495hGePUO0ZwGMoYL2aLOyeQ0U3bBvD5+PiPsojxAIQmqwtJNgkqdVlbD8KqOnG1yv4vM2dTRvlEaJNwcr3YiEV4DDVwF0nqZmjsEa5QQ06i7tsnYpcQtirWram4jFzBGeewds1cY3FzX4KgxqnRfSTX8Ut9d1bXHmJW3ql8ggvgQJ9d2QmVv5v60nAHskEtd8n7IlRLaggU74XzSPEWYPP7s39wLj2k8KCCAZRnLDt8A1CKZwokfufPMIBFLDWdn3GpHd3Z11AzsxjFajqhG1IGDxm9LULdcFWHiEOhBV76adq7NHE2PIRowvA4R+HW7x5Qa/UMSHuEOzbar3308s9mJF7234M92wabDGhjglxubDX9pVllwVudt02TlDVWf7QWySu/211TIivgNhnoWf9mbZc2EY4Hg7Popzz6if4uOU5VMeE+MKN0442Xu0xDHAjeoGqTtiGHrblcXDHhHCe5AYmxgK1/cFsdQ4soG0HHCPylvvDjgnB3TZOzIz1qisNA7wOlhHuvRF8Zcs9Pg56F4TvkN84+TOzSTPptcaNNHGVcj7Gqd3OIeJmpAvCDeQ3T67N58pjrEJmN4TKzsdBF5tQt4Rf0XzTTz3H5N8NB4d+wbk7xR63O8bolhDuULzTW7jjVANxjcWaR9h4FuW8Rn2Gj72z4qC6JcSthee8Zk43rxczzQNerOzu5nF+torbuiVE9+zNGei/8hgzf0RimwIkb3Ws3y0hGpp/qAKORHqMJ3+U0fOVkZqtzLRbQlws/EMVWBOVxxDeW674em7jNQNsNfQWQ1PdEuLWwr/qwyGS9IFzJRgrNxKw7hbbhDXdEq4hP/AeMhzExC6rq1iBlGl46pYwEpYo4YoRuSaDR+C97gOj22IQuyWMhJbNfkZWjGE0H2PNXaiio24JgSFoiGhs/hHfVRifeb9ygAmeeJtL64cIg9aEtcPvNu0h23/LGS7Bww/HUreEkB0OIWGaht85wInqBy/oSl4CNW11SojvhYSjD5hO4V0CzrbAJQwG9bEf6mh1Soi9iNiS9geRlQai8+ChE+TemIrRq1ajHMJTsosFnPpGzpRw/xwssDH+Mv3yF87mDgjxiCQSXmmGWPNQPfJ2qJnH81QnMa7qgBANJOa2lgkTtoKadaQAnIsnlhvoQ8xUcghxaxE7UpEH29GfPUHAEA1dHkxcGN1IoVNdRC4ccwhxCrzFWqhS557gTRK/qTjp2G4UnurmIqcaRH85lEPY4uWefeqW7HC7fq1nc77s/RrzdaBCjkmZOg1IEm7ShL3bPXxP/Z5g0IqwwJ9YTqZPv+Sp8vl11x/KaTxa9lO/+yrihGiBlsD5nkeB3OA8WIYXoXmgfvL08HO/rJoVFodVizPVGOGuHPjCXWAgswy+8Bqx0b7ffHlzM3h+3j3tZdn9antq+VMM/r8Y/4GYkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL6YkL4eiof/XI9/ALVJU38w2771AAAAAElFTkSuQmCC"
                                            alt=""
                                        />
                                    </a>
                                    <div className={cx('comment-content')}>
                                        <div className={cx('par')}>
                                            <p>Mọi người ơi cho mì</p>
                                        </div>
                                        <div className={cx('count-react')}>
                                            <div className={cx('react-comment')}>
                                                <Button>Thích</Button>
                                                <Button>Phản hồi</Button>
                                            </div>
                                            <div className={cx('count-block')}>
                                                <LoveIcon className={cx('love-icon')} />
                                                3123
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default Blog;
