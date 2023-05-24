import styles from './Footer.module.scss';
import classNames from 'classnames/bind';
import HeadlessTippy from '@tippyjs/react/headless';
import Button from '~/components/Button/Button';
import { SearchIcon } from '~/components/Icons';
import { Wrapper as PopperWrapper } from '~/components/Popper';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                visible
                // visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}> Accounts </h4>
                            {/* {searchResult.map((result) => (
                                <AccountItem data={result} />
                            ))} */}
                        </PopperWrapper>
                    </div>
                )}
            >
                <div className={cx('input')}>
                        <input type="text" placeholder="Tìm kiếm ..." />
                        <Button icon className={cx('btn-search')}>
                            <SearchIcon width="2.4rem" height="2.4rem" />
                        </Button>
                    </div>
            </HeadlessTippy>
        </div>
    );
}

export default Footer;
